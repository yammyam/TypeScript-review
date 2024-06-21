// 함수 타입 정의
function func(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => a + b;

// 선택적매개변수는 맨오른쪽에 있어야함 중간에 끼면 정의 오류 생김
function introduce(name = "이정환", tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((i) => (sum += i));
  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
