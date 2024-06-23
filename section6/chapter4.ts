// 제네릭 인터페이스, 제네릭 타입별칭
// K, V의 명칭은 타입변수, 타입파라미터, 제네릭타입변수,제네릭타입파라미터 이름이 여러개
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 1,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니쳐
interface NumberMap {
  [key: string]: number;
}
let numberMap1: NumberMap = {
  key: -123,
  key2: 123123,
};
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "hello",
};

// 제네릭 인터페이스의 활용 예시
// 유저관리 프로그램
// 유저구분 : 학생/개발자
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "홍길동",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};
const studentUser: User<Student> = {
  name: "철수",
  profile: {
    type: "student",
    school: "앞초",
  },
};
