import type { SQL } from "bun";

export async function up(sql: SQL) {
  await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        age INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
}

export async function down(sql: SQL) {
  await sql`
      DROP TABLE IF EXISTS users;
    `;
}
