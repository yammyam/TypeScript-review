// 타입 단언(type assertion)
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "홍길동";
person.age = 28;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <= 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입 이여야함

// 다중단언 오류를 피할수 있지만 좋은게아님
let str = 10 as unknown as string;

// const 단언
let num4 = 10 as const;

// 내부 프로퍼티가 readonly로 변해버림
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

//Non null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "",
  author: "",
};

// Non null 단언
const leng: number = post.author!.length;
// author가 널이거나 언디파인이 아니니까 계산해!
