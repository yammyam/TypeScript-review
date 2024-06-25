// infer(추론) 조건부타입에서 특정 타입을 추론하는 방법
type FuncA = () => string;
type FuncB = () => number;

type RetrunType<T> = T extends () => infer R ? R : never;
// 조건식을 참으로 만드는 타입으로 추론됨
type A = ReturnType<FuncA>;
type B = RetrunType<FuncB>;
type C = RetrunType<number>; // number를 함수 타입에 비비지만 추론불가능해서 거짓이 되고 never반환

// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이여야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
type PromiseA = PromiseUnpack<Promise<number>>;
//number가 나왔으면 함
type PromiseB = PromiseUnpack<Promise<string>>;
//string가 나왔으면 함
