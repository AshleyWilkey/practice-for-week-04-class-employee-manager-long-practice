import { Employee, Title } from "./employee";

export class Manager extends Employee {
  public employees: (Employee | Manager)[];

  constructor(
    name: string,
    salary: number,
    title: Title,
    manager: Manager | null = null,
    employees: (Employee | Manager)[] = []
  ) {
    super(name, salary, title, manager);
    this.employees = employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier: number): number {
    return (this.salary + this.totalSubSalary()) * multiplier;
  }

  public totalSubSalary(): number {
    return this.employees.reduce((acc, curr) => {
      if (curr instanceof Manager) {
        return acc + curr.totalSubSalary() + curr.salary;
      } else {
        return acc + curr.salary;
      }
    }, 0);
  }
}
