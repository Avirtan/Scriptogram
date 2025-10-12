import { postgres } from "@/db/index"
import type { SQL } from "bun";
import { readdir } from "node:fs/promises";
import { parseArgs } from "util";

async function migrate() {
    const { values, positionals } = parseArgs({
        args: Bun.argv,
        options: {
            action: {
                type: 'string',
            },
        },
        strict: true,
        allowPositionals: true,
    })
    if (!values.action) {
        return
    }
    const pg = postgres.connect();
    await pg`
      CREATE TABLE IF NOT EXISTS migrations (
        id SERIAL PRIMARY KEY,
        current_index INTEGER,
        max_index INTEGER
      )
    `;

    if (values.action == "up") {
        up(pg);
    }
    if (values.action == "down") {
        down(pg);
    }
    if (values.action == "create") {
        create(pg);
    }
    if (values.action == "reset") {
        reset(pg);
    }
}

async function up(pg: SQL) {
    const migrations: Array<any> = await pg`
        SELECT * FROM migrations
    `
    let index = 0;
    let isFirst = true;
    let isUpdate = false;
    if (migrations.length != 0) {
        index = migrations[0].current_index;
        isFirst = false;
    }
    const files = await readdir(import.meta.dir + "//files//");
    for (let file of files) {
        let tmpIndex = parseInt(file.split("_")[0]!, 10);
        if (tmpIndex <= index) {
            continue;
        }
        let fileMigrate = await import(`./files/${file}`);
        console.log(file);
        fileMigrate.up(pg);
        isUpdate = true;
        break;
    }
    index++;
    if (!isUpdate) {
        return;
    }
    if (isFirst) {
        const migrateData = {
            current_index: index,
            max_index: 0
        };
        const [newMigrate] = await pg`
          INSERT INTO migrations ${pg(migrateData)}
          RETURNING *
        `;
        return
    }


    await pg`
          UPDATE migrations
          SET current_index = ${index}
        `;
}

async function down(pg: SQL) {
    const migrations: Array<any> = await pg`
        SELECT * FROM migrations
    `
    let index = 0;
    let isFirst = true;
    let isUpdate = false;
    if (migrations.length != 0) {
        index = migrations[0].current_index;
        isFirst = false;
    }
    const files = await readdir(import.meta.dir + "//files//");
    for (let file of files) {
        let tmpIndex = parseInt(file.split("_")[0]!, 10);
        if (tmpIndex > index) {
            continue;
        }
        let fileMigrate = await import(`./files/${file}`);
        console.log(file);
        fileMigrate.down(pg);
        isUpdate = true;
        // index = tmpIndex;
        break;
    }
    index--;
    if (!isUpdate) {
        return;
    }


    await pg`
          UPDATE migrations
          SET current_index = ${index}
        `;
}

async function create(pg: SQL) {
    let index = 0
    let timestamp = new Date().getTime()
    const files = await readdir(import.meta.dir + "//files//")
    for (let file of files) {
        index = parseInt(file.split("_")[0]!, 10)
    }
    index++

    const data = `
import type { SQL } from "bun";

export async function up(sql: SQL){

}

export async function down(sql: SQL){

}
    `;
    await Bun.write(import.meta.dir + "\\files\\" + `${index}_${timestamp}_.ts`, data);
}

async function reset(pg: SQL) {
    const migrations: Array<any> = await pg`
        SELECT * FROM migrations
    `
    let index = 0;
    if (migrations.length != 0) {
        index = migrations[0].current_index;
    }
    const files = await readdir(import.meta.dir + "//files//");
    for (let file of files) {
        let tmpIndex = parseInt(file.split("_")[0]!, 10);
        if (tmpIndex > index) {
            continue;
        }
        let fileMigrate = await import(`./files/${file}`);
        console.log(file);
        fileMigrate.down(pg);
    }

    await pg`
          UPDATE migrations
          SET current_index = ${0}
        `;
}


migrate();