// Unknown 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  // 위쪽은 다 업캐스팅 작업이라 모두 허용됨

  //아래는 다운캐스팅이기 때문에 오류 발생
  let unknownVar: unknown;
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
}

// Never 타입 (공집합)
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let boolean: boolean = neverFunc();
  // 위는 업캐스팅
  // 아래는 다운 캐스팅(오류)
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

// Void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }
  let voidVar: void = undefined;
  //   let undefined1: undefined = voidFunc();
}

// Any타입 타입 계층을 무시함(사용 최소화 권장)
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;
  // neverVar = anyVar; 이것만은 허용안됨 공집합이여야하기 때문 any가 다운캐스팅 불가능한 한가지
}
