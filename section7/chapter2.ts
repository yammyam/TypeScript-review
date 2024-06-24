// key of 연산자 (객체타입에 적용하는 연산자)
interface Person {
  name: string;
  age: number;
}
function getPropertyKey(person: Person, key: keyof Person) {
  // 객체타입의 프로퍼티 키를 유니온타입으로 추출해냄(동일하게 "타입" 만 뒤에 들어갈 수 있음)
  // key: keyof typeof person 가능
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name");

// type Person = typeof person; // ts에서의 typeof연산자는 타입을 추출해내는 용도로 작업이 바뀜(추론해서 타입정해줌)
