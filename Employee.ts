export class Employee {
  private emplName: string;
  private currentProject: string;

  constructor(name: string, project: string) {
    this.emplName = name;
    this.currentProject = project;
  }

  getCurrentProject(): string {
    return this.currentProject;
  }

  getName(): string {
    return this.emplName;
  }
}
