import { Inject, Injectable } from '@nestjs/common';
import { Employee } from '../../entities/employee.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
    ) { }
    async findAll():Promise<Employee[]>{
        return await this.employeeRepository.find();
    }
    getHello(): String{
        return 'this is hello'
    }
}