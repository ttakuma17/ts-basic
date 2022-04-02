export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: "Tokyo",
    language: "Japanese",
    name: "Japan",
  }
  console.log("Object alias sample 1: ", japan)

  const america: Country = {
    capital: "Washington D.C",
    language: "English",
    name: "United States of America",
  }
  console.log("Object alias sample 2: ", america)

  // Union と Intersection
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }
  // 冒険者はナイトかウィザードの型をもつ
  type Adventure = Knight | Wizard

  // 魔法もソードも使える職業の型
  type Paladin = Knight & Wizard

  // Knightよりの冒険者
  const adventure1: Adventure = {
    hp: 100,
    sp: 30,
    weapon: "木の剣",
    swordSkill: "三連切り",
  }

  // Wizardよりの冒険者
  const adventure2: Adventure = {
    hp: 100,
    mp: 30,
    weapon: "木の杖",
    magicSkill: "ファイアボール",
  }

  console.log("Object alias sample 3: ", adventure1)
  console.log("Object alias sample 4: ", adventure2)
  // オブジェクトに対して使うときには、Union型は両方に定義されたプロパティを利用できてしまうことに注意する
  // 持とうと思えばもてる
  //

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: "鉄の剣",
    swordSkill: "三連切り",
    magicSkill: "ファイアボール",
  }
  // 仮に mp を消すと型エラーになる
  //

  console.log("Object alias sample 6: ", paladin)
}
