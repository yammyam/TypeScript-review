// 유틸리티 타입
// 1. Partial<T>
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
// Partial 직접구현
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "~~",
};

// 2. Required<T>
// 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
const withThumbnailPost: Required<Post> = {
  title: "타스",
  tags: ["ts"],
  content: "",
  thumbnailURL: "ASDF",
};
// Required 직접구현
type Required<T> = {
  [key in keyof T]-?: T[key];
};

// Readonly<T>
// 읽기전용 수정불가
// 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
const readonlyPost: Readonly<Post> = {
  title: "",
  tags: [],
  content: "",
};
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
