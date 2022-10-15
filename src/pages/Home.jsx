import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import GithubLogo from "../icons/github-logo.svg"



const Home = () => {

    const { users } = useContext(GithubContext)



    return (

        <div className="flex-1 flex px-10 py-5 relative">

            <div className={users.length > 0 ? " mx-auto flex flex-col "
                : "w-full flex flex-col space-y-10 items-center self-center mb-20 "}>
                <div className="flex space-x-5 md:space-x-10 items-center self-center">
                    <h2 className="text-white text-5xl md:text-7xl font-dancing">Github Finder</h2>
                    <img className="h-20 md:flex md:h-36" src={GithubLogo} alt="github-logo" />
                </div>
                <UserSearch />
                <UserResults />

            </div >
        </div>
    )
}

export default Home;