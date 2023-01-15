// const arr = [10, 2, 3, 4, 2, 2, 2, 2];
// const minValue = Math.min(...arr);
// const numFrq = arr.filter((el) => el === minValue);

// console.log(numFrq.length);

class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Employee id and name are mandatory");
    }
    (this.id = id), (this.name = name);
  }
  setSalary(salary) {
    this.salary = salary;
  }

  getId() {
    return this.id;
  }

  getname() {
    return this.name;
  }

  getSalary() {
    return this.Salary;
  }
}

const employee = new Employee(1, "Israel");
employee.setSalary(1000);
console.log(employee);
console.log(employee.getSalary());
console.log(employee.getId());
console.log(employee.getname());

class Manger extends Employee {
  setDepartment(name) {
    this.department = name;
  }

  getDepartment() {
    return this.department;
  }
}

const manger = new Manger(2, "Jhon");
manger.setDepartment("development");
console.log(manger);

console.log(manger.getDepartment());
