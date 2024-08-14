const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repos: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },

    setRepos(repos) {
        this.repos = repos
    }
}


export { user }