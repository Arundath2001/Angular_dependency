import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees = [
    {
      personal: {
        Name: 'Arundath',
        age: 22,
        gender: 'Male',
        place : 'Kozhikode'
      },
      official: {
        empid: '1',
        dpt: 'Software',
        title: 'Frontend Developer',
        startdate : '12/09/2023',
        worklocation : 'Kochi',
      },
    },
    {
      personal: {
        Name: 'Jareesh',
        age: 20,
        gender: 'Male',
        place : 'Kannur'
      },
      official: {
        empid: '2',
        dpt: 'Software',
        title: 'Backend Developer',
        startdate : '19/02/2022',
        worklocation : 'Kozhikode',
      },
    },

    {
      personal: {
        Name: 'Aromal',
        age: 24,
        gender: 'Male',
        place : 'Kannur'
      },
      official: {
        empid: '3',
        dpt: 'Software',
        title: 'Fullstack Developer',
        startdate : '01/01/2022',
        worklocation : 'kochi',
      },
    },

  ];

  getEmployees() {
    return this.employees;
  }
}
