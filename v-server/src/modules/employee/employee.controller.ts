import { Get, Controller } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../../entities/employee.entity';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }
    @Get('findAll')
    findAll(): Promise<Employee[]> {
        return this.employeeService.findAll();
    }
    @Get()
    getHello(): String {
        return this.employeeService.getHello();
    }
}