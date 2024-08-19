const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="Foto de perfil" />
                <div class="data">
                    <h1>${user.name ?? 'Sem nome'}</h1>
                    <p>${user.bio ?? 'Sem bio'}</p>
                    <p>seguidores: ${user.followers}</p>
                    <p>seguindo: ${user.following}</p>
                </div>
            </div>
        `

        let reposItens = ""
        user.repos.forEach(repo => {
            reposItens += `
                <li>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <div class = "repo-infos">
                    <p>🍴: ${repo.forks_count}</p>
                    <p>⭐: ${repo.stargazers_count}</p>
                    <p>👀: ${repo.watchers_count}</p>
                    <p>👨‍💻: ${repo.language}</p>
                    </div>
                </li>
            `

        })

        if (user.repos.length > 0) {
            this.userProfile.innerHTML += `
                <div class="repositories section">
                    <h2>Repositorios</h2>
                    <ul>${reposItens}</ul>
                </div>
            `
        }

        let pushEvents = ""
        user.events.forEach(event => {
            if (event.type === 'PushEvent') {
                pushEvents += `
                <li> ${event.repo.name} - ${event.payload.commits[0].message}</li>
                `
            }
        })
        if (user.pushEvents != '') {
            this.userProfile.innerHTML += `
                <div class="events section">
                    <h2>Events</h2>
                    <ul>${pushEvents}</ul>
                </div>
            `
        } else {
            this.userProfile.innerHTML += `
                <div class="events section">
                    <h2>Events</h2>
                    <p>Sem mensagem de commit</p>
                </div>
            `
        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = `
            <h3>Usuário não encontrado</h3>
        `
    }
}

export { screen }