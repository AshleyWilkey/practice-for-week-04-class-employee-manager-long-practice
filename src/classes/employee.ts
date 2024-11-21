import { Manager } from "./manager";

export enum Title {
  SENSAI = "Sensai",
  NINJA = "Ninja",
  GRASSHOPPER = "grasshopper",
}

export class Employee {
  public name: string;
  public salary: number;
  public title: Title;
  public manager: Manager | null;

  constructor(
    name: string,
    salary: number,
    title: Title,
    manager: Manager | null = null
  ) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    this.manager = manager;

    if (this.manager) {
      this.manager.addEmployee(this);
    }
  }

  calculateBonus(multiplier: number) {
    const bonus = this.salary * multiplier;
    return bonus;
  }
}
