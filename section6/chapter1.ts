// 제네릭
function func<T>(value: T): T {
  // T의 명칭은 "타입 변수"
  return value;
}
let num = func(10);
let bool = func(true);
let str = func("hi");

// 제네릭 함수에서 명시적으로 타입 지정해줄때
let arr = func<[number, number, number]>([1, 2, 3]);
