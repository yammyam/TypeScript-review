//배열(요소타입 같을때)
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "Lee"];
let boolArr: Array<boolean> = [true, false, true];
//꺽새에 넣는것 제네릭 문법

//(요소타입 다를때)
let multiArr: (string | number)[] = [1, "hello"];
// | 유니온타입

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2],
  [3, 4, 5],
];

//튜플(js에 없는 ts에만 있는것)
//길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1,2,3];(x)
// tup1 = ["1","2"];(x)

let tup2: [number, string, boolean] = [1, "2", true];
// tup1의 길이를 2로 정했지만 js파일로 컴파일 되면 어짜피 배열이라 배열메서드를 사용해도 길이제한이 발동하지 않고 알아듣지 못함. 각별한 주의
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
//순서를 문자열, 숫자 를 지켜야 될때 튜플사용하면 좋음
const users: [string, number][] = [
  ["정환", 1],
  ["길동", 2],
  ["철수", 3],
  ["영희", 4],
];
