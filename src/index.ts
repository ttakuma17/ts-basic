// import World from "./world"

// import typeAliasSample from "./object/alias"

// const root = document.getElementById("root")
// const world = new World("Hello World!!")

// world.sayhello(root)

// import { primitiveSample, notExistSample, anySample, unknownSample } from "./basic"

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// import objectSample from "./object/object"

// objectSample()

// typeAliasSample()

// 関数の型定義
// import { logMessage } from "./function/basic"
// import { isUserSignedIn, isUserSignedIn2 , sumProductsPrice} from "./function/optionparameter"

// logMessage("Hello typescript")
// isUserSignedIn("ABC", "ユーザーA")
// isUserSignedIn("CDE")
// isUserSignedIn2("ABC")

// const sum = sumProductsPrice(100,200,300,400, 500)

// console.log("Function parameter sample 5" , sum)

// // 呼び出しシグネチャ 省略記法
// type logMessage = (message: string) => void
// export const logMessage6: logMessage = (message) => {
// 	console.log("Function parameter sample 6" , message)
// }

// // 呼び出しシグネチャ 完全
// type fullOfLogMessage = (message: string) => void
// export const logMessage7: fullOfLogMessage = (message: string) => {
// 	console.log("Function parameter sample 7" , message)
// }

import arraySample from "./array/array"
import tupleSample from "./array/tuple"

arraySample()
tupleSample()
