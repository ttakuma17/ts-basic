export default function objectSample() {
  // const a: object = {
  // 	name: "名前",
  // 	age: 20
  // }

  let country: {
    language: string
    name: string
  } = {
    language: "Japanese",
    name: "Japan",
  }

  console.log("Object : object sample 1:", country)

  country = {
    language: "English",
    name: "USA",
  }
  console.log("Object : object sample 2:", country)

  const tarou: {
    age: number
    lastname: string
    readonly firstname: string
    gender?: string
  } = {
    age: 26,
    lastname: "Yamada",
    firstname: "Tarou",
  }
  tarou.gender = "male"
  // エラーになる → readonlyだから
  // tarou.firstname = "heeey"

  const capitals: {
    [countryname: string]: string
  } = {
    Japan: "Tokyo",
    Korea: "Seoul",
  }

  capitals.China = "Beijin"
  capitals.Canada = "Otawa"

  console.log("Object : object sample 3:", capitals)
}
