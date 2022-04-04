export const logMessage = (message: string): void => {
  console.log("Function basic sample1:", message)
}

export function logMessage2(message: string): void {
  console.log("Function basic sample2:", message)
}

export const logMessage3 = function (message: string): void {
  console.log("Function basic sample3:", message)
}

export const logMessage4 = (message: string): void => console.log("Function basic sample4:", message)

// 戻り値がnever 常にエラーを返すので
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}
