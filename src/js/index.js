import { getUser } from "./services/user.js"
import { getRepos } from "./services/repos.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"



document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const enterPressed = key === 13
    if (enterPressed) {
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }

}
)

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuario do GitHub')
        return true
    }
}




async function getUserData(userName) {

    const userResponse = await getUser(userName)
    console.log(userResponse)

    if (userResponse.message === "API rate limit exceeded for 189.63.226.90. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)") {
        screen.renderNotFound()
        return
    }

    const reposResponse = await getRepos(userName)

    user.setInfo(userResponse)
    user.setRepos(reposResponse)


    screen.renderUser(user)
}



