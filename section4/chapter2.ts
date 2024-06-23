// 타입별칭에는 없고 인터페이스만 있는
// 인터페이스 확장(상속)

interface Animal {
  name: string;
  color: string;
}
interface Dog extends Animal {
  // name: "hello"; // 상속받아온 프로퍼티를 다시 할 수 있음. 그러나 원본 프로퍼티 타입의 서브타입으로 만 정의가능
  isBark: boolean;
}
const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};
interface Cat extends Animal {
  isScratch: boolean;
}
interface Chicken extends Animal {
  isFly: boolean;
}

// 인터페이스 다중확장
interface DogCat extends Dog, Cat {}
const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: false,
};
