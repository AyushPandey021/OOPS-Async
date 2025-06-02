function Employee(name, age, id, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.id = id;
}
Employee.prototype.printDetails = ()=> {
  console.log(
    `${this.name} is my name and i am ${this.age} years old and my id is ${this.id} and my salary is ${this.salary} `
  );
};

let e1 = new Employee("Babu", 26, 1234, 1000000);
let e2 = new Employee("Vivek", 28, 1234, 75000);
let e3 = new Employee("Ayush", 24, 1234, 60000);

// run with
// e1.printDetails()
