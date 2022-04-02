export default function notExistSample() {
  // nullが存在するのは基本的に良くないこと
  const name = null
  console.log("notExist sample 1:", typeof name, name)
  if (!name) {
    console.log("notExist sample 2:", "吾輩は猫である。名前はまだ" + name)
  } else {
    console.log("notExist sample 3:", "吾輩は猫である。名前は" + name)
  }

  const age = undefined
  console.log("notExist sample 4:", typeof age, age)
  if (!age) {
    console.log("notExist sample 5:", "年齢は秘密である")
  } else {
    console.log("notExist sample 3:", "年齢は" + age + "です")
  }
}
