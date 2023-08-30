import { Employee } from './Employee';
import { ILocation } from './ILocation';

export class CompanyLocationLocalStorage implements ILocation {
  readonly KEY: string = 'employees';

  constructor() {
    let employees: Employee[] = [];
    localStorage.setItem(this.KEY, JSON.stringify(employees));
  }

  addPerson(employee: Employee): void {
    let employees: Employee[] = this.getEmployees();
    employees.push(employee);
    localStorage.setItem(this.KEY, JSON.stringify(employees));
  }

  getPerson(index: number): Employee {
    let employees: Employee[] = this.getEmployees();
    return index < employees.length ? employees[index] : null;
  }

  getCount(): number {
    let employees: Employee[] = this.getEmployees();
    return employees.length;
  }

  getEmployees(): Employee[] {
    let employees: Employee[] = [];
    let parsedArray: Employee[] = JSON.parse(localStorage.getItem(this.KEY));

    for (let emp of parsedArray) {
      let person: Employee = new Employee(emp['emplName'], emp['currentProject']);
      employees.push(person);
    }
    return employees;
  }
}
