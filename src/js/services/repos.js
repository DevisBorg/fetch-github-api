import { baseUrl, reposQuantity } from '../var.js'

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${reposQuantity}`)
    return await response.json()
}

export { getRepos }