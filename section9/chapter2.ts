// Pick, Omit, Record;
// 1. Pick
// 객체타입으로 부터 특정 프로퍼티만 골라내는 그런 유틸리티타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날글",
  content: "옛날 컨텐츠",
};
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

// 2. Omit
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
const notitlePost: Omit<Post, "title"> = {
  // Pick<Post, "content" | "tags" | "thumbnailURL"> 이렇게 하기보단 Omit을 사용해서
  content: "",
  tags: [],
  thumbnailURL: "",
};
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 3. Record<K , V>
// 클래스처럼 객체 만들어주는 유틸리티 타입
// type thumbnailLegacy = {
//   large: { url: string };
//   medium: { url: string };
//   small: { url: string };
// };
type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
type Record<K extends keyof any, V> = {
  [key in K]: V;
};
