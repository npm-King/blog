import { Module } from '@nestjs/common';;
import { EmployeeController } from './employee.controller'
import { EmployeeService } from './employee.service'
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { DatabaseModule } from '../database/database.module';
import { employeeProviders } from './employee.providers';

@Module({
    imports: [DatabaseModule],
    providers: [...employeeProviders,EmployeeService],
    controllers: [EmployeeController]
})
export class EmployeeModule {
  
}