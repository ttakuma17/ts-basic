// オプションパラメータを持つ関数

export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === "ABC") {
    console.log("Function parameter sample1: User is signed in", username)
    return true
  } else {
    console.log("Function parameter sample2: User is not signed in")
    return false
  }
}

// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (userId: string, username: string = "No Name"): boolean => {
  if (userId === "ABC") {
    console.log("Function parameter sample3: User is signed in", username)
    return true
  } else {
    console.log("Function parameter sample4: User is not signed in")
    return false
  }
}

// レストパタメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number): number => {
    return prevTotal + productPrice
  }, 0)
  // 0はprevTotalの初期値
}
