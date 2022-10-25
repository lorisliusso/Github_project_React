import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {


    return (


        <div className='h-4/5'>

            <div className="max-w-lg text-center container mx-auto  ">

                <h1 className="text-8xl font-bold mb-8">Oops!</h1>

                <p className='text-5xl mb-8'> 404- Page Not Found!</p>

                <Link to='/' className='flex justify-center items-center'>

                    <FaHome className='text-6xl mr-4' />
                    <p className='text-4xl underline hover:text-blue-400'> Back To Home</p>

                </Link>

            </div>

        </div >

    )
}

export default NotFound;