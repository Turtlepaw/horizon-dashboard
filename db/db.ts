import "reflect-metadata"
import { DataSource, FindOptionsWhere } from "typeorm"
import { User, UserOptions } from "./entities/user";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
}).initialize();

export async function createUser(options: UserOptions){
    const repo = await (await AppDataSource).getRepository(User);

    return await repo.save(options);
}

export async function deleteUser(options: FindOptionsWhere<User>) {
    const repo = await (await AppDataSource).getRepository(User);

    return await repo.delete(options);
}

export async function getUser(options:FindOptionsWhere<User>) {
    const repo = await (await AppDataSource).getRepository(User);

    return await repo.findOneBy(options);
}