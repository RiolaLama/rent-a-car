import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/Auth/auth.module';
import { Car } from 'src/Entities/CarEntity';
import { Reservation } from 'src/Entities/ReservationEntity';
import { ReportController } from './report.controller';
import { Report } from '../Entities/ReportEntity';
import { ReportService } from './report.service';

@Module({
  imports: [TypeOrmModule.forFeature([Report, Reservation, Car]), AuthModule],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
