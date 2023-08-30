import { Employee } from './Employee';
import { ILocation } from './ILocation';

export class Company<Location extends ILocation> {
  compName: string;
  location: Location;

  constructor(compName: string, location: Location) {
    this.compName = compName;
    this.location = location;
  }

  getProjectList(): string[] {
    let projects: string[] = [];
    for (let emp of this.location.getEmployees()) {
      projects.push(emp.getCurrentProject());
    }
    return projects;
  }

  getNameList(): string[] {
    let names: string[] = [];
    let employees: Employee[] = this.location.getEmployees();
    employees.forEach((emp) => names.push(emp.getName()));
    return names;
  }

  getLocation(): Location {
    return this.location;
  }
}
