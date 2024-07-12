import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

import { SalaryCalculationRequest } from '../../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../../models/salary-calculation-response.model';
import { SalaryCalculationService } from '../../services/salary-calculation.service';

@Component({
  selector: 'app-salary-calculator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent {
  employeeForm: FormGroup;
  salaryResult: SalaryCalculationResponse | null = null;

  constructor(private fb: FormBuilder, private salaryService: SalaryCalculationService) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      hourlyWage: [0, [Validators.required, Validators.min(0)]],
      hoursWorked: [0, [Validators.required, Validators.min(0)]],
      overtimeHours: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formValue: SalaryCalculationRequest = this.employeeForm.value;
      this.salaryResult = this.salaryService.calculateSalary(formValue);
    }
  }
}