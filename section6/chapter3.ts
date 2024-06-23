// map ,forEach 메서드 타입 정의하기
const arr = [1, 2, 3];
const newArr = arr.map((i) => {
  return i * 2;
});

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
map(arr, (it) => it * 2);
map(["hi", "hello"], (it) => it.toUpperCase());

// forEach
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (i: T) => void) {
  for (let i = 0; i < arr2.length; i++) {
    callback(arr[i]);
  }
}
forEach(arr, (i) => console.log(i.toFixed()));
forEach(["123", "12", "1"], (it) => it);
