import { Company } from './Company';
import { CompanyLocationArray } from './CompanyLocationArray';
import { CompanyLocationLocalStorage } from './CompanyLocationLocalStorage';
import { Employee } from './Employee';

const arrayLocation = new CompanyLocationArray();
const localStorageLocation = new CompanyLocationLocalStorage();
const pepsi = new Company('PepsiCo', arrayLocation);
const cocaCola = new Company('Coca-Cola', localStorageLocation);

pepsi.getLocation().addPerson(new Employee('Alice', 'Pepsi Original'));
pepsi.getLocation().addPerson(new Employee('Bob', 'Pepsi Lite'));
console.info('Projects: ', pepsi.getProjectList());
console.info('Names:', pepsi.getNameList());

cocaCola.getLocation().addPerson(new Employee('Charlie', 'Cola Zero'));
cocaCola.getLocation().addPerson(new Employee('David', 'Project Slurm'));
console.info('Projects: ', cocaCola.getProjectList());
console.info('Names:', cocaCola.getNameList());

console.info('Number of epmployees: ', cocaCola.getLocation().getCount());
