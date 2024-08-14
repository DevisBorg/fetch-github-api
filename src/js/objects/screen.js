const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class = "info">
                             <img src = "${user.avatarUrl}" alt = "Foto de perfil"
                             <div class = "data"
                                 <h1>${user.name ?? 'Sem nome'}</h1>
                                 <p>${user.bio ?? 'Sem bio'}</p>
                             </div>
                         </div>`
        let reposItens = ""
        user.repos.forEach(repo => {
            reposItens += `<li><a href = "${repo.html_url}" target = "_blank">${repo.name}</a></li>`
        });
        if (user.repos.length > 0) {
            this.userProfile.innerHTML += `<div class = "repositories section"
                                                                                 <h2>Repositorios</h2>
                                                                                 <ul>${reposItens}</ul>
                                                                               </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }