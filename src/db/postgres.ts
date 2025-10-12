import { SQL } from "bun";

let username: string = process.env.POSTGRES_USER!;
let password: string = process.env.POSTGRES_PASSWORD!;
let database: string = process.env.POSTGRES_DB!;
let hostname: string = "localhost";
let sql: SQL;

function getSQL(): SQL {
    return sql;
}

function connect(): SQL {
    sql = new SQL({
        hostname: hostname,
        username: username,
        password: password,
        database: database,
        onconnect: () => {
            // console.log("connect db");
        },
        adapter: "postgres"
    })
    return sql;
}

export const postgres = {
    connect,
    getSQL
}
// export class Postgres {
//     private username: string;
//     private password: string;
//     private database: string;
//     private hostname: string = "localhost";
//     private sql: SQL;

//     constructor() {
//         this.username = process.env.POSTGRES_USER!;
//         this.password = process.env.POSTGRES_PASSWORD!;
//         this.database = process.env.POSTGRES_DB!;
//     }

//     public get(): SQL {
//         return this.sql;
//     }

//     public connect() {
//         this.sql = new SQL({
//             hostname: "localhost",
//             username: process.env.POSTGRES_USER,
//             password: process.env.POSTGRES_PASSWORD,
//             database: process.env.POSTGRES_DB,
//             onconnect: () => {
//                 // console.log("connect db");
//             },
//             adapter: "postgres"
//         })
//     }
// }