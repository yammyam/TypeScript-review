// 클래스(객체 생성기)

let studentA = {
  name: "홍길동",
  grade: "A+",
  age: 27,
  study() {
    console.log("공부중 ");
  },
  introduce() {
    console.log("hi");
  },
};

class Student {
  //1. 필드설정
  name;
  grade;
  age;
  //2. 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드 만드는법
  study() {
    console.log("공부중 ");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다`);
  }
}

// 클래스를 이용해서 만든 객체를 "인스턴스" 라고 부름
// "스튜던트 인스턴스"
let studentB = new Student("홍길동", "A+", 25);
console.log(studentB);
studentB.study();
studentB.introduce();

// 비슷한 인스턴스가 만들어질 것으로 예측되니 클래스 상속 사용
class StudentDeveloper extends Student {
  favoriteSkill;
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); //super함수는 부모의 클래스 즉 Student의 생성자가 실행됨
    this.favoriteSkill = favoriteSkill;
  }
  programing() {
    console.log(`${this.favoriteSkill}를 사용해 프로그래밍 주로 함 `);
  }
}

const studentDeveloper = new StudentDeveloper("홍길동", "B", 25, "TS");
console.log(studentDeveloper);
studentDeveloper.programing();
