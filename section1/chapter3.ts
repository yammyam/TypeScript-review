//중괄호를 사용해서 객체의 타입을 지정하는 방식을 객체 리터럴타입이라 부름
//객체의 구조기준으로 타입설정 => 구조적타입시스템
//c언어같은 객체는 object타입 하나 끝, 처럼 하나만 가지고있으면 명목적 타입시스템
//?는 있어도되고 없어도되고 있다면 넘버타입이여야 된다. 옵셔널프로퍼티
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "갈색",
};

user = {
  name: "철수",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "my key",
};
// config.apiKey = "hacked";(X)
// 절대 값이 수정되는게 허용되지않으면 readonly를 붙이면됨
