// 함수 타입 표현식(타입별칭)  function type expression

type Operation = (a: number, b: number, c?: string) => number;

const add: Operation = (a, b, c) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니쳐 (call signature)
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
