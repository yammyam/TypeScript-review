//any
//특정변수의 타입을 우리가 확실히 모를떄 ex) 함수에 들어오는 매개변수
let anyVar: any = 10;
anyVar = "hi";
anyVar = {};
anyVar = true;

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;
//타입을 치트키처럼 넘어가지만 런타임에서 오류가 남, 타입스크립트 쓰는 이유가 없어지는 느낌, 최소한으로 써야함

//unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;(X)
// unknownVar.toUpperCase();(X)
// 타입 정제를 해서 사용해야함
if (typeof unknownVar === "number") {
  num = unknownVar + 1;
}
