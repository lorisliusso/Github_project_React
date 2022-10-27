import { useReducer } from 'react';
import githubReducer from './GithubReducer';
import { createContext } from 'react';


export type UserType = {
  id?: number,
  name?: string,
  type?: string,
  avatar_url?: string,
  location?: string,
  bio?: string,
  blog?: string,
  twitter_username?: string,
  login?: string,
  html_url?: string,
  followers?: number,
  following?: number,
  public_repos?: number,
  public_gists?: number,
  hireable?: boolean
};

export type UsersType = Array<UserType>;

export type RepoType = {
  id?: number,
  name?: string,
  description?: string,
  html_url?: string,
  forks?: number,
  open_issues?: number,
  watchers_count?: number,
  stargazers_count?: number
};

export type ReposType = RepoType[];


export type UserAndReposType = {
  user: UserType,
  repos: ReposType
};

export type GithubActionType = {
  type: string,
  payload?: any
};

export type GithubStateType = {
  user: UserType,
  users: UsersType,
  repos: ReposType,
  loading: boolean,
  dispatch: (action: GithubActionType) => void
};


const initialState: GithubStateType = {
  users: [],
  user: {},
  repos: [],
  loading: false,
  dispatch: () => { },
};

const GithubContext = createContext<GithubStateType>(initialState);

export const GithubProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;