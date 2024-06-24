// 분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;
let a: StringNumberSwitch<number>;
let c: StringNumberSwitch<number | string>;
// 유니온을 넣으면 조건부로 검사안해주고 분산적인 조건부타입으로 업그레이드 됨(동작이 바뀜)number 한번 string 한번 그둘이 유니온으로
// StringNumberSwitch<number> | StringNumberSwitch<string>   =>   string | number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean>|StringNumberSwitch<number>|StringNumberSwitch<string>
// => number | string |  number   =>       number|string

// 실용적인 예제(특정타입 제외하고 나머지 도출하고 싶을 때)
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number,string>|
// Exclude<string,string>|
// Exclude<boolean,string>

// 2단계
// number | never | boolean

// 3단계
// number | boolean //string 타입이 사라진 모습
type Extract<T, U> = T extends U ? never : U; //내가한거
type Extract2<T, U> = T extends U ? T : never; //정답
type B = Extract<number | string | boolean, string>;
