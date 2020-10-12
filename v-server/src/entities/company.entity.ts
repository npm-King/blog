import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Employee } from '../modules/employee/employee.entity'
@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    // @OneToMany(type => Employee, employee => employee.company)
    employees: Employee[]
}