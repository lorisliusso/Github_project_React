import axios from 'axios'
import { UserAndReposType, UsersType } from './GithubContext';


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL


// Get search results
export const searchUsers = async (text: string): Promise<UsersType> => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await axios.get(`${GITHUB_URL}/search/users?${params}`)
  return response.data.items
}

// Get user and repos
export const getUserAndRepos = async (login: string): Promise<UserAndReposType> => {
  const [user, repos] = await Promise.all([
    axios.get(`${GITHUB_URL}/users/${login}`),
    axios.get(`${GITHUB_URL}/users/${login}/repos`),
  ])

  return { user: user.data, repos: repos.data }
}