export default function tupleSample() {
  // 一般的なタプル 配列の1つめがnumber型,2つ目がstring型
  const response: [number, string] = [200, "OK"]
  console.log("tuple type sample1", response)
  // ログに出すと一見配列とかわらないように見えるが、配列に縛りをもたらすことができので、そういう用途ではおすすめ

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ["kana", "miku", "keiko"]
  girlfriends.push("misa")
  console.log("tuple type sample2", girlfriends)
  // 1つ目の要素は必ずstring , 2つ目以降はnumber型とかのときにもタプルは使えるので結構便利

  // イミュータブルな配列を作るときには、readonlyの型を与えてあげれば、書き換え不可にできる

  const command: readonly string[] = ["git add", "git commit"]
  // command.push("git push") // pushメソッドは存在しないよと言われる
  console.log("tuple type sample3", command)
}
