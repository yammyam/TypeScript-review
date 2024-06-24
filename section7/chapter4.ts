// 템플릿 리터럴 타입
// 스트링 리터럴 타입 기반으로 특정 패턴을 갖는 문자열 타입들을 만드는 기능
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";
type ColoredAnimal1 = "red-dog" | "red-cat"; //.... 기존 아는 방식으로는 다 적어주어야 하기때문에 비효율적
type ColoredAnimal2 = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal2 = "black-cat";
