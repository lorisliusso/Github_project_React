import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { UserType } from '../../context/GithubContext';


//every single user block of the grid:

const UserItem = ({ user }: { user: UserType }): JSX.Element => {

    const { login, avatar_url } = user;



    return (


        <div className='flex items-center space-x-10 md:space-x-7 shadow-lg rounded-2xl
         border border-gray-600 hover:bg-gray-600 p-1 '>

            <div className=''>
                <img src={avatar_url} alt='Profile' className='rounded-2xl h-14 w-14  md:h-24 md:w-24' />
            </div>


            <div className='flex flex-row justify-center space-x-6 items-center w-1/3 md:w-1/2   '>

                <div className='flex flex-col text-center text-white '>
                    <h2 className='mb-1 font-bold '>{login}</h2>
                    <Link className=' underline hover:text-sky-600' to={`/user/${login}`} >Profile</Link>
                </div>

                <div>
                    <FaGithub className='hidden md:block text-white text-2xl' />
                </div>

            </div>


        </div >


    )
}


export default UserItem
