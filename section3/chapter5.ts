// 사용자 정의 타입가드
type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};
type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined; //타입 단언 사용 ,타입을 좁히기위해서 사용했음, 사용하지않으면 좁혀지지않음
}
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}
function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  } else if (isCat(animal)) {
    animal;
  }
}
