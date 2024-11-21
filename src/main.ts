import { Manager, Employee, Title } from "./classes";

(() => {
  const splinter = new Manager("Splinter", 100000, Title.SENSAI);
  const leo = new Manager("Leonardo", 90000, Title.NINJA, splinter);
  const raph = new Manager("Raphael", 90000, Title.NINJA, leo);
  const mikey = new Employee("Michelangelo", 85000, Title.GRASSHOPPER, raph);
  const donnie = new Employee("Donatello", 85000, Title.GRASSHOPPER, raph);

  console.log(splinter.calculateBonus(0.05)); // => 22500
  console.log(leo.calculateBonus(0.05)); // => 17500
  console.log(raph.calculateBonus(0.05)); // => 13000
})();
