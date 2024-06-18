// 객체 타입간의 호환성
// 프로퍼티 기준으로 부모,자식 관계를 나눔
type Animal = {
  name: string;
  color: string;
};
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};
let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
// dog = animal;(X)

type Book = {
  name: string;
  price: number;
};
type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let probook: ProgramingBook = {
  name: "한입타스",
  price: 33000,
  skill: "react.js",
};

book = probook;
// probook = book;(X)
// 초과 프로퍼티 검사기능이 작동됨 아래 코드
let book2: Book = {
  name: "한입타스",
  price: 33000,
  //   skill: "react.js",  초과프로퍼티
};

// 위 오류를 피하기 위해선...
let book3: Book = probook; // 대입연산자로 이렇게 하거나

function func(book: Book) {}
func({
  name: "한입리액트",
  price: 33000,
  //   skill: "react.js",(X)
});
// 리터럴{}을 이용할게 아닌
func(probook); //매개변수로 넣을것
