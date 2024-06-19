// 타입추론
// 변수의 초기값으로 타입을 추론함
let a = 10;
let b = "hi";
let c = {
  id: 1,
  name: "홍길동",
  profile: {
    nickname: "hong",
  },
  urls: ["https://hong.com"],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "2", true];

function func(message = "hello") {
  return "hello";
  // 함수의 반환값을 기준으로 타입을 추론
}

// 애니타입의 진화(암묵적 any타입)
let d; // let d: any 해버리면 암묵적이지 않게되어서 안적은거랑 동작에 차이가있음 아래가 싹 any타입 고정됨, 진화가 되어야 함
d = 10; // 여기 이후부터 d는 number타입이 되어버림
d.toFixed();

d = "hello"; // 여기선 string
d.toUpperCase();

const num = 10;
const str = "hi";

let arr = [1, "2"];

// 타입을 추론하는 과정(타입넓히기)
