import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaryCalculatorComponent } from "./components/salary-calculator/salary-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaryCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen-final';
}
