import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    avatar: string;

    @Column()
    abstract: string;

    @Column()
    date: string;

    @Column()
    classify: string;

}