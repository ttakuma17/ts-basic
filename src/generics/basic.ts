export default function genericsBasicSample() {
  // ジェネリック型の宣言方法
  // 完全な呼び出しシグネチャ
  type Reduce<T> = {
    (array: T[], initialValue: T): T
  }
  // 呼び出しシグネチャの省略記法
  // type ShortReduce<U> = (array: U[], initialValue: U) => U

  const genericsStringReduce: Reduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("Generics basic sample 1", genericsStringReduce(["make", "typescript"], "value"))

  const genericsNumberReduce: Reduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log("Generics basic sample 2", genericsNumberReduce([1, 2], 3))
  //
}
