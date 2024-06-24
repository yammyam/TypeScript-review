// 맵드타입 : 기존의 객체타입 기반으로 새로운 객체타입을 만드는 (Mapped Type), 인터페이스에선 불가능하기 때문에 타입별칭써야함
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

// 모두 boolean 타입으로 바꾸고싶을때
type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

// 위와 같은거지만 keyof 사용해서 깔끔해진 모습
type BooleanUser2 = {
  [key in keyof User]: boolean;
};

// 모든 프로퍼티에 readonly를 붙이고싶을때
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ...기능
  return {
    id: 1,
    name: "홍길동",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // ...수정하는 기능
}

updateUser({
  id: 1,
  name: "홍길동",
  age: 25,
});
