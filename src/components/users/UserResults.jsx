import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";



const UserResults = () => {

    const { users, loading, searchUsers } = useContext(GithubContext)

    //////USE STATE 

    //...moved to context

    ///////////////////


    //////USE EFFECT

    ///////////////////


    //const fetchUsers MOVED TO THE CONTEXT




    if (!loading) {  //if loading is false (if loading's done)


        return (


            <div className="grid grid-cols-2 gap-7 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-10">

                {users.map(user => {

                    return (

                        <UserItem key={user.id} user={user} />

                    )

                })}

            </div>
        )//return


    } else {

        return <Spinner />
    }

















}//done

export default UserResults;