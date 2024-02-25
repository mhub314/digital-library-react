import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

function Navbar() {

    const [ isVisible, setIsVisible ] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-400 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to='/' className='font-semibold text-xl tracking-tight hover:text-slate-700'>Your Digital Library</Link>
            </div>
            <div className="block">
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-white border rounded border-white hover:text-slate-700 hover:border-slate-700'>
                    <i className="fa-solid fa-caret-down"></i>
                </button>
            </div>
            { isVisible ? (
                <div className="w-full block flex-grow items-center">
                    <div className="text-sm lg:flex-grow">
                    {
                            !auth.currentUser ?

                            <Button className='p-3 m-5 bg-slate-500 hover:bg-slate-300 justify-center'>
                                <div>
                                    <Link to="/" onClick={ () => { signInOnClick() }} className="flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-slate-800 hover:text-white font-bold">
                                        Sign In
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 bg-slate-500 hover:bg-slate-300 justify-center'>
                                <div>
                                    <Link to="/" onClick={ () => { signOutOnClick() }} className="flex place-items-center mt-4 
                                    lg:inline-block lg:mt-0 text-slate-800 hover:text-white font-bold">
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                        <Button className="p-3 m-5 bg-slate-500 justify-center">
                            <div>
                                <Link to='/' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-700 mr-4'>Home</Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-slate-500 justify-center">
                            <div>
                                <Link to='/about' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-700 mr-4'>About</Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-slate-500 justify-center">
                            <div>
                                <Link to='/' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-700 mr-4'>Best Selling</Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-slate-500 justify-center">
                            <div>
                                <Link to='/' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-700 mr-4'>Classics</Link>
                            </div>
                        </Button>
                        <Button className="p-3 m-5 bg-slate-500 justify-center">
                            <div>
                                <Link to='/dashboard' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-slate-800 hover:text-slate-700 mr-4'>Dashboard</Link>
                            </div>
                        </Button>
                    </div>
                </div>
            ) : (
            <></>
            )}
        </nav>
    )
}

export default Navbar
