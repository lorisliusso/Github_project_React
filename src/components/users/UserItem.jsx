import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'


const UserItem = ({ user }) => {

    const { login, avatar_url } = user;



    return (


        <div className='flex items-center space-x-7 shadow-lg rounded-2xl border border-gray-600 hover:bg-gray-600 p-1'>

            <div className=''>
                <img src={avatar_url} alt='Profile' width='100px' height='100px' className='rounded-2xl' />
            </div>


            <div className='flex flex-row justify-center space-x-6 items-center'>

                <div className='flex flex-col text-center text-white '>
                    <h2 className='mb-1 font-bold'>{login}</h2>
                    <Link className=' underline hover:text-sky-600' to={`/user/${login}`} >Visit Profile</Link>
                </div>

                <div>
                    <FaGithub className='text-white text-2xl mr-2' />
                </div>

            </div>


        </div >


    )
}


export default UserItem
