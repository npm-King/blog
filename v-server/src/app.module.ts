import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '3A1415926',
        database: 'blog',
        entities: [
            __dirname + '/**/*.entity{.ts,.js}',
        ],
        synchronize: true,
  }),EmployeeModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
