// 대수타입
// 합집합 타입, 교집합 타입이 존재

// 1. 합집합 타입(Union 타입)
let a: string | number | boolean; //"스트링 넘버 유니온 타입" 라고 부름
a = 10;
a = "hi";

a = true;
let arr: (number | string | boolean)[] = [1, "hi", true];

type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  language: string;
};
type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
  language: "",
};
let union2: Union1 = {
  name: "",
  language: "",
};

// 아래 코드는 오류가남, dog집합도아니고(name없어서) person집합도(name없어서)아니고 그 사이 교집합도아닌 밖에있는 객체집합
// let union3: Union1 = {
//   color: "",
//   language: "",
// };

// 2.교집합 타입 Intersection 타입
let variable: number & string;

type Intersection = Dog & Person;
let intersection1: Intersection = {
  name: "",
  language: "",
  color: "",
};
