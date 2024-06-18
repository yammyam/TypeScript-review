// void
// 아무것도없음 , 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
}
function func2(): void {
  console.log("hello");
}

let a: void;
a = undefined;
// 오직 언디파인만 담을 수 있음
// nullchecks 옵션을 끄면 null 까지는 들어갈 수 있음

const func3 = (): undefined => {
  return undefined;
  //return; 똑같이 undefined를 반환하는 코드.
};
//실제로 언디파인드를 반환해야지 오류가 사라짐, null도 마찬가지

// never타입
// 존재하지않는 불가능한 타입
function func4(): never {
  while (true) {}
}
// 위에서는 반환을 해버리는 반면 never는 반환을 할수가 없는, 하고싶어도 못하는 그러한상황
// 이 함수에 반환값 있는거 자체가 모순이다
function func5(): never {
  throw new Error();
}
// never타입은 tsconfig를 건드리거나 무슨짓을 하더라도 아무것도 못담음
