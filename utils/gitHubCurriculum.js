// repos functions
const cleanUsername = repo => {
    const match = repo.match((/\/(?<repo>.+)/))
    return match.groups.repo
}

const isNotFork = ({fork}) => !fork

const extractProps = repo => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stars: repo.stargazers_count
})

// user functions
const userMap = ({public_repos, public_gists, followers}) => ({
    public_repos,
    public_gists,
    followers
})


const getUser = async username => {

    const userResponse = await fetch(`https://api.github.com/users/${username}`)
    const userJson = await userResponse.json()
    const user = userMap(userJson)

    return user
}

const getRepos = async ({username, hiddenRepositories}) => {

    const url = `https://api.github.com/users/${username}/repos`
    const reposResponse = await fetch(url)
    const reposJson = await reposResponse.json()

    const repos = reposJson
        .filter(isNotFork)
        .map(repo => ({...repo, full_name: cleanUsername(repo.full_name)}))
        .filter(repo => !hiddenRepositories.includes(repo.full_name))
        .map(extractProps)
        .map(props => ({...props, full_name:`${username}/${props.full_name}`}))
        return repos
}

const gitHubCurriculum = async ({username, hiddenRepositories}) => {
    const user = await getUser(username)
    const repos = await getRepos({username, hiddenRepositories})

    return {user, repos}
}

export default gitHubCurriculum