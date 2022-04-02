export default function anySample() {
  let name: any = "名前" // string型を入力済み
  console.log("anySample" + name, typeof name)
  name = 28 // 型エラーがでない
  console.log(name, typeof name)
}
