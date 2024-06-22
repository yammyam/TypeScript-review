// 함수 오버로딩
// js는 안되고 ts에서만 가능.
// 하나의 함수 func, 모든 함수의 매개변수 타입은 number
// 함수에 어떤버전이 있는지 먼저 알려줘야함

// 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
