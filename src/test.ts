import { postgres } from "./db/index"


export async function test() {
    let pg = postgres.getSQL();
    await pg`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100),
            age INTEGER,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    const userData = {
        name: "Alice",
        email: "alice@example.com",
        age: 1
    };

    const [newUser] = await pg`
      INSERT INTO users ${pg(userData)}
      RETURNING *
    `;

    console.log(newUser);
}