type User = {
  id: number;
  name: string;
  nickname: string;
  location: string;
  bio: string;
  birth: string;
};
//타입별칭(여러개라면 중복코드 제거 가능)
let user: User = {
  id: 1,
  name: "철수",
  nickname: "yam",
  location: "대구",
  bio: "안녕하세요",
  birth: "1999.02.11",
};
//주의할점 같은 스코프내에 같은이름으로 선언두번이상 불가능, 아래와 같이 함수내부에서 스코프가 다르니 가능
function func() {
  type User = {};
}

//인덱스 시그니쳐
type CountryCodes = {
  //   korean: string;
  //   US: string;
  //   UK: string;
  //... 프로젝트 규모가 커서 나라가 많다면
  [key: string]: string;
};

//규칙을 보고 이용해야함 string: string
let countryCodes: CountryCodes = {
  Korea: "ko",
  US: "us",
  UK: "uk",
};

type numberCode = {
  [key: string]: number;
  korea: number;
  //   korea:string; 위의 인덱스 시그니쳐 문법의 우항에 있는 타입과 일치시키지않는 string으로 넣을려면 오류가남(일치 호환)
};
let countryNumbersCodes: numberCode = {
  korea: 410,
  US: 840,
  UK: 826,
};
//주의할점: 저 틀만 만족하면 어떤것이 들어와도 상관없기 때문에 빈객체로 놔두더라도 오류가 나지않지만, 한국이라는 넘버타입이 있어야된다고 명시하면 빈객체일때 오류남
