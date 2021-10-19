
const baseUrl: string = 'http://localhost:3000/api'

export async function get(path: string) {
  try {
    const response = await fetch(`${baseUrl}${path}`)
    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error.message)
  }
}

export async function post(path: string, data: any) {
  try {
    const response = await fetch(`${baseUrl}${path}`, 
    {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error.message)
  }
}