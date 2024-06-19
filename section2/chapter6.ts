// 타입 좁히기
// 조건문 등을 통해 넓은 타입에서 좁은 타입으로
// value => Date :get time
type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    // <= 타입가드라고 불림, 조건문으로 타입 분기하는 작업을
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // null에다가 typeof해도 object가 반환되어서 두 가지가 반환될려고 함,
  // typeof value === "object" 라고 object로 분기하는건 좋은방법이 아님.
  // console.log(value.getTime());
  // a instance b , b는 클래스여야함
  else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(value.age);
  }
}
