import { Employee } from './Employee';
import { ILocation } from './ILocation';

export class CompanyLocationArray implements ILocation {
  private employees: Employee[] = [];

  addPerson(employee: Employee): void {
    this.employees.push(employee);
  }

  getPerson(index: number): Employee {
    return index < this.employees.length ? this.employees[index] : null;
  }

  getCount(): number {
    return this.employees.length;
  }

  getEmployees(): Employee[] {
    return this.employees;
  }
}
