import { RedisClient } from "bun";

let username: string = process.env.KEYDB_USERNAME!;
let password: string = process.env.KEYDB_PASSWORD!;

let connects: Map<string, RedisClient> = new Map();

function getConnection(name: string): RedisClient | null {
    const connection = connects.get(name);
    if (!connection) {
        return null
    }
    return connection;
}

async function connect(name: string): Promise<RedisClient> {
    const connect = new RedisClient(`redis://${username}:${password}@localhost:6379`);
    await connect.connect()
    connects.set(name, connect);
    return connect;
}

export const keydb = {
    connect,
    getConnection,
}