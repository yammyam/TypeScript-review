let num1: number = 123; //타입주석, 타입 어노테이션(Annotation)
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num2}`;

let bool1: boolean = true;
let bool2: boolean = false;

let null1: null = null;

let undefined1: undefined = undefined;

// let numA: number = null;
//기본적으로 타입스크립트에서 숫자변수에 잠시 null넣어놓는게 허용되지 않지만 tsconfig조정을 통해 오류끄기 가능
//strict옵션 집합이 strictNullchecks 옵션을 감싸고있어서 상위를 true로 하면 자동으로 Nullchecks도 true

//리터럴타입(10이라는 값으로 만든 타입)
let numA: 10 = 10;
// numA = 12; (X)

let strA: "hello" = "hello";
let boolA: true = true;
