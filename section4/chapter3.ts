// 인터페이스 합치기
// 타입별칭은 동일한 이름이면 오류가 나지만 인터페이스는 합쳐진다. 인터페이스 확장은 서브타입으로가진 변경 가능
interface Person {
  name: string;
}
interface Person {
  age: number;
}
const person: Person = {
  name: "",
  age: 27,
};

// 모듈 보강
interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
