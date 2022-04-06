export default function callbackSample() {
  const url = " https://api.github.com/users/ttakuma17"

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log("Asynchronous sample 1:", json)
            return json
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const profile = fetchProfile()
  console.log("Asynchronous sample 2:", profile)
}
