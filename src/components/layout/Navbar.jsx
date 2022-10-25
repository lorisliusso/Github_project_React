import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {


    return (

        <nav className='text-xl font-semibold bg-gray-800 text-white h-fit'>


            < div className='container mx-auto flex p-4 items-center' >


                {/* LEFT: LOGO + PROJECT TITLE */}

                < div className="flex flex-none px-2 mx-2 cursor-pointer" >

                    <Link to='/' ><FaGithub className='pr-2 text-3xl' /></Link>

                    <Link to='/' className='font-bold '>Github Finder</Link>

                </div >


                {/* RIGHT: LINKS */}

                <
                    div className="hidden md:flex flex-1 px-2 mx-2 space-x-6 justify-end" >

                    <Link to='/' className='hover:bg-gray-600 rounded-xl p-3'>HOME</Link>
                    <Link to='/about' className='hover:bg-gray-600 rounded-xl p-3'>ABOUT</Link>
                    <Link to='/contact' className='hover:bg-gray-600 rounded-xl p-3'>CONTACT</Link>

                </div>




            </div >


        </nav >


    )
}


export default Navbar;