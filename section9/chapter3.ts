// exclude, extract, return Type
// 1. Exclude<T,U> T에서 U만 제거한 타입
type A = Exclude<string | boolean, boolean>;
type Exclude<T, U> = T extends U ? never : T;

// 2. Extract<T, U>
// T에서 U를 추출하는 타입
type B = Extract<string | boolean, boolean>;
type Extract<T, U> = T extends U ? T : never;

// 3. Return Type<T>
// 함수의 반환값 타입을 추출하는 타입
function funcA() {
  return "hello";
}
function funcB() {
  return 10;
}
type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R // T가 참이되는 녀석으로 타입을 추론
  ? R
  : never;
