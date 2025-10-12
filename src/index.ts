import { postgres, keydb } from "@/db/index"

async function init() {
    postgres.connect()
    const pg = postgres.getSQL()
    const _keydb = await keydb.connect("main");

}

init();
// const publisher = await new RedisClient("redis://root:password@localhost:6379");

// const subscriber = await new RedisClient("redis://root:password@localhost:6379");

// Подключение к KeyDB

// const t = async () => {
//     const c1 = await keydb.connect("main");
//     // c1.set("test", "1234");
//     // await keydb.connect();
//     // keydb.publish("general", "Hello everyone!");
// };
// t();

// const t1 = async () => {
//     // await subscriber.connect();
//     subscriber.onconnect = () => {
//         console.log("Connected to Redis server");
//     };

//     subscriber.subscribe("general", (message, channel) => {
//         console.log(`Received from ${channel}: ${message}`);
//     });


// };
// t1();



// keydb.close();

// const listener = await new RedisClient("redis://root:password@localhost:6379");
// await listener.connect();

// await listener.subscribe("general", (message, channel) => {
//     console.log(`Received: ${message}`);
// });

// await pg`
//   CREATE TABLE IF NOT EXISTS users (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100),
//     email VARCHAR(100),
//     age INTEGER,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   )
// `;

// const userData = {
//     name: "Alice",
//     email: "alice@example.com",
//     age: 1
// };

// const [newUser] = await pg`
//   INSERT INTO users ${pg(userData)}
//   RETURNING *
// `;

// console.log(newUser);