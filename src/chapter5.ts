//enum 타입
//열거형 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//enum은 컴파일되어도 사라지지않음, js의 객체로 변환
enum Role {
  ADMIN = 0,
  //숫자 작성안해도 맨위에서부터 0 1 2 순으로 굴러감, 10번부터 시작하고싶다면 맨 위에만 10 아래는 ++,
  //USER에만 10을 한다면 admin은 0 guest는 11
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}
const user1 = {
  name: "lee",
  role: Role.ADMIN, //0은 관리자
  language: Language.korean,
};
const user2 = {
  name: "kim",
  role: Role.USER,
};
const user3 = {
  name: "go",
  role: Role.GUEST,
};
