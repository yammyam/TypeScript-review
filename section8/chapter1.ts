// 조건부 타입(제네릭과 함께 써야 효과가 극대화)
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};
type ObjB = {
  a: number;
  b: number;
};

// extends 잘모르겠음
type B = ObjB extends ObjA ? number : string;

type SNS<T> = T extends number ? string : number;
let varA: SNS<number> = "hi";
let varB: SNS<string> = 1;

// 조건부함수 , 함수오버로딩, 제네릭 3개합친거
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi hi hi hi hi hi");
result.toUpperCase();
