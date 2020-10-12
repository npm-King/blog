import { Get, Controller } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }
    @Get('findAll')
    async findOne(): Promise<Employee> {
        const all = await this.employeeService.findAll();
        return;
    }
}