export default function promiseSamle() {
  const url = " https://api.github.com/users/ttakuma17"

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          res
            .json()
            .then((json: Profile) => {
              console.log("Asynchronous Promise sample 1:", json)
              resolve(json)
            })
            .catch((error) => {
              console.log(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.log(error)
          reject(null)
        })
    })
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log("Asynchronous Promise sample 2:", profile)
      }
    })
    .catch(() => {
      console.log()
    })
}
