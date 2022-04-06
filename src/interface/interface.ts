// Interface
interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: "hard",
}

// 型エイリアスで表現

type MaboDohu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDohu & Rice

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}

// interface は拡張することもできる

interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: "daily" | "weekly" | "monthly" | "yearly"
}

const jump: Magazine = {
  page: 300,
  title: "週刊少年ジャンプ",
  cycle: "weekly",
}

// type aliasを継承するinterfaceの例
type BookType = {
  page: number
  title: string
}

interface Handbook extends BookType {
  page: 120
  title: "ことりっぷ"
  theme: "旅行"
}

// implements を使ってclassに型を定義する
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + "が発売されたのは" + this.publishYear + "年です"
  }
}
