import { Employee } from './Employee';

export interface ILocation {
  addPerson(employee: Employee): void;
  getPerson(index: number): Employee;
  getCount(): number;
  getEmployees(): Employee[];
}
