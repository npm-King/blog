import { createConnection } from "typeorm";

export const databaseProviders = [{
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '3A1415926',
        database: 'blog',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
    })
}]