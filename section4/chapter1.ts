// 인터페이스 (객체의 타입을 정의하는데 특화됨) ex) 상속, 합침 등
// 타입별칭과 기본적인 동작은 비슷
interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void; //주석을 한 이유는 이 문법이 메서드 타입지정 정석표현이지만 오버로딩 표현하려면 아래처럼 호출시그니쳐로 해야함(메서드의 오버로딩)
  sayHi(): void;
  sayHi(a: number, b: number): void;
  // sayHi():void; // 이처럼 호출시그니처 문법으로도 사용가능 메서드라서 근데 소괄호앞에 이름붙는거만 다름
}

// 아래는 메서드와는 비슷하지만 함수자체가 어떤 타입인지 반환하는 전체를 그린 표현식//호출시그니쳐
type Func = {
  (): void;
};

const person: Person = {
  name: "홍길동",
  sayHi: function (a?: number, b?: number) {
    if (typeof a === "number" && typeof b === "number") {
      console.log(a + b);
    } else {
      console.log("Hi");
    }
  },
};

person.sayHi();
person.sayHi(1, 2);

// 인터페이스는 타입별칭과 차이점이 있는데 인터페이스끼리 |또는 &연산이 불가능해서 사용하려면 타입별칭에다가 넣어서 아래와같이 사용해야한다.
type Type1 = number | string | Person;
type Type2 = number & string & Person;
// 또는 타입주석으로 아래처럼 사용할 수 있다.
// const person: Person | number= {
//     name: "홍길동",
//     sayHi: function (a?: number, b?: number) {
//       if (typeof a === "number" && typeof b === "number") {
//         console.log(a + b);
//       } else {
//         console.log("Hi");
//       }
//     },
//   };
