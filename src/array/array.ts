export default function arraySample() {
  const colors: string[] = ["red", "blue"]
  colors.push("yellow")
  console.log("Array type sample1", colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  console.log("Array type sample2", even)

  const ids: (string | number)[] = ["ABC", 123]
  ids.push(122)
  ids.push("Hey")
  console.log("Array type sample3", ids)

  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push("Re")
    return _someArray
  }
  console.log("Array type sample4", generateSomeArray())
}
