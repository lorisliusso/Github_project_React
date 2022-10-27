import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/GithubContext";


const UserResults = (): JSX.Element => {

    const { users, loading } = useContext(GithubContext)


    if (!loading) {  //if loading is false 


        return (


            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4 lg:grid-cols-3 mt-10">

                {users.map((user: any) => {

                    return (

                        <UserItem key={user.id} user={user} />

                    )

                })}

            </div>
        )


    } else {

        return <Spinner />
    }

















}//done

export default UserResults;