import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryColumn()
    access_token: string;

    @Column()
    token_type: string;

    @Column()
    jwt_token: string;
}

export interface UserOptions {
    access_token: string;
    token_type: string;
    jwt_token: string;
}