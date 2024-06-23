// 인터페이스와 클래스
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}
// 인터페이스는 무조건 public으로 설정되기 때문에 아래 매개변수에 public이 아닌 private를 붙이면 오류가 남
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}
  move() {
    console.log(`${this.moveSpeed}속도로 이동`);
  }
}
