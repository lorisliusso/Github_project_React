import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'

const UserSearch = () => {
    const [text, setText] = useState('')

    const { users, dispatch } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (text === '') {
            setAlert('Please enter something', 'error')
        } else {
            dispatch({ type: 'SET_LOADING' })
            const users = await searchUsers(text)
            dispatch({ type: 'GET_USERS', payload: users })

            setText('')
        }
    }

    return (
        <div className='w-full flex items-center justify-center space-x-7'>


            <form onSubmit={handleSubmit} className='w-[80%] flex items-center justify-end relative '>


                <input
                    type='text'
                    className=' bg-gray-200 text-black rounded-xl p-4 w-full relative z-0 text-xl '
                    placeholder='Search name...'
                    value={text}
                    onChange={handleChange}
                />

                <button
                    type='submit'
                    className='text-xl text-slate-800 rounded-l-none rounded-xl bg-gray-400 py-4 px-10 absolute z-10 font-bold'>GO!
                </button>

            </form>

            {users.length > 0 && (

                <button
                    onClick={() => dispatch({ type: 'CLEAR_USERS' })}
                    className='bg-white py-3 px-6 text-xl font-bold rounded-xl text-gray-600'
                >
                    Clear
                </button>

            )}
        </div>
    )
}

export default UserSearch