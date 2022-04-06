type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type Player = "first" | "second"

// class Game { }

// コマの位置をクラスにする
class Position {
  constructor(private suji: Suji, private dan: Dan) {}
  //
  distanceFrom(position: Position, player: Player) {
    if (player == "first") {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        dan: -Math.abs(Number(position.dan) - Number(this.dan)),
      }
    }
  }
}
// コマを表すくらす
abstract class Piece {
  // Pieceクラスとサブクラスでアクセスできる
  protected position: Position

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }
  moveTo(position: Position) {
    this.position = position
  }

  // 移動できるかどうかを判定刷るメソッド
  abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
  canMoveTo(position: Position, player: Player) {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2
  }
}

class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [new Osho("first", 5, "1"), new Osho("first", 4, "9")]
  }
}
