import { baseUrl } from "../var.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`)
    return await response.json()
}


export { getEvents }