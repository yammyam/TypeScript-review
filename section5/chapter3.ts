// 접근제어자
// 상속받은 파생클래스에서 private로 접근제한된건 사용 못하지만 파생에서만이라도 사용하고싶다면 protected 사용하면 됨.
class Employee {
  //   private name: string; // 해당클래스 내부에서만 조작가능, 파생클래스에서도 불가능
  //   protected age: number;
  //   public position: string;
  //생성자에 접근제한을 부여하면 위에 필드를 설정하지 않아도 알아서 만들어 져있다고 볼수있음.(지워도 됨)
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // 초기화도 자동으로 해줌(비워놔도 됨)
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }
  // 메서드
  work() {
    console.log(`${this.name}일함`);
  }
}
const employee = new Employee("홍길동", 25, "FE");
// employee.name = "홍길동"; //접근조차 허용되지않지만 readonly는 수정은 못해도 읽기는 가능하다는점에서 좀다름
// employee.age = 30;
employee.position = "BE";

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
  func() {
    this.age;
    // this.name;
  }
}
console.log(employee);
