// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지 판단하는 것
// 두 가지의 체크리스트)  반환값의 타입이 호환되는지, 매개변수의 타입이 호환되는지

// 기준1 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; 다운 캐스팅이라 안됨.

// 기준2 매개변수가 호환되는가
// 2-1 매개변수의 개수가 같을때
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 매개변수 기준일때는 업캐스팅이 허용이 안됨 (이유는 아래)
d = c;

type Animal = { name: string };
type Dog = { name: string; color: string };

// 2-2 매개변수의 개수가 다를때
// Func1은 매개변수 2개필요한데 1개있어야하는 곳에 넣을려고하면 오류가 남(공통인수 a 매개변수의 타입이 같아야되는건 기본)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;

// 정리
// 1. 매개변수 개수가 같을때
// 매개변수로 객체가 들어왔을때 있지도 않는 값을 참조하는 사고가 나기 때문에
// 매개변수 기준일때는 집합의 잘게 종류가 많고 프로퍼티가 많은 서브타입 집합이 부모가됨

// 2. 매개변수 개수가 다를때
// 인수가 많이 필요한 func1인데 1개만 존재한다는 func2에 타입을 넣을려고하면 일치하지 않는 부분이 있어서 오류가 남.
