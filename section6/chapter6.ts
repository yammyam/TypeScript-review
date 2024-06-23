import { ftruncate } from "fs";
import { resolve } from "path";

// 프로미스의 제네릭
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~때문에 실패");
  }, 3000);
});
// promise는 자동 추론기능이 없음
promise.then((response) => console.log(response * 10));

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// 프로미스를 반환하는 함수의 타입을 정의
// 서버로부터 하나의 게시글 데이터를 불러오는 상황
interface Post {
  id: number;
  title: string;
  content: string;
}
function fetchPost(): Promise<Post> {
  //여기다가 타입선언하는게 가독성이 좋다.
  return new Promise<Post>((resolve, reject) => {
    //여기서 <Post>하는거 보다는 위처럼
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글제목",
        content: "게시글",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
