// 인덱스드 엑세스 타입
// 객체 타입으로부터 특정 프로퍼티의 타입을 쏙뽑아서 매개변수등에 타입으로 지정해줄수 있는 기능
// 큰 타입으로 부터 자잘자잘하게 골라오는데 유용함.
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    //아래애 age, location 등등 계속 추가되더라도 아래에 객체 리터럴로 정의하면 계속 추가작업을 해줘야하는 그런 비효율적인 작업을 안할수 있음.
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  //id라는것만 뽑아오고 싶다면 대괄호 하나 더하고 뒤에 붙이기
  //   (author: Post["author"]["id"])
  //대괄호 안은 값이 아님 , 따라서 변수에 author라는 문자열 넣고 대괄호안에 변수넣어도 동작안함. 대괄호 안은 "타입"임을 생각
  console.log(`${author.name}, ${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 25,
  },
};

printAuthorInfo(post.author);

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    //아래애 age, location 등등 계속 추가되더라도 아래에 객체 리터럴로 정의하면 계속 추가작업을 해줘야하는 그런 비효율적인 작업을 안할수 있음.
    age: number;
  };
}[];

const postList: PostList[number] = {
  //여기도 대괄호 안은 "타입"만 들어옴
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "홍길동",
    age: 25,
  },
};

function printAuthorInfoList(author: PostList[number]["author"]) {
  //id라는것만 뽑아오고 싶다면 대괄호 하나 더하고 뒤에 붙이기
  //   (author: Post["author"]["id"])
  //대괄호 안은 값이 아님 , 따라서 변수에 author라는 문자열 넣고 대괄호안에 변수넣어도 동작안함. 대괄호 안은 "타입"임을 생각
  console.log(`${author.name}, ${author.id}`);
}

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];
