// 타입스크립트에서의 클래스
const employee = {
  name: "홍길동",
  age: 25,
  position: "FE",
  work() {
    console.log("일함");
  },
};

// ts에선 클래스가 타입으로도 쓰임
class Employee {
  name: string;
  age: number;
  position: string;
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  // 메서드
  work() {
    console.log("일함");
  }
}
const employeeB = new Employee("홍길동", 25, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 24,
  position: "BE",
  work() {},
};

class ExecutiveOfficer extends Employee {
  officeNumber: number;
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
