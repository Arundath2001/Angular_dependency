import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.scss'],
})
export class OfficialComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
}
