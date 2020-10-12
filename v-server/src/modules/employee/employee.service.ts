import { Inject, Injectable } from '@nestjs/common';
import { Employee } from './employee.entity'
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private readonly employeeRepository: Repository<Employee>,
    ) { }
    async findAll():Promise<Employee[]>{
        return await this.employeeRepository.find();
    }
}