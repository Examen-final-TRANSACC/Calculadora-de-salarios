import { Injectable } from '@angular/core';
import { SalaryCalculationRequest } from '../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../models/salary-calculation-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {

  constructor() { }

  calculateSalary(data: SalaryCalculationRequest): SalaryCalculationResponse {
    const regularSalary = data.hourlyWage * data.hoursWorked;
    const overtimeSalary = data.overtimeHours * data.hourlyWage * 1.5;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * 0.1;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary,
      overtimeSalary,
      deductions,
      netSalary
    };
  }
}