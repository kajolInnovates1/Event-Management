import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Navbar = () => {
    const { user, logout } = use(AuthContext);

    const Links = <>
        <NavLink className={({ isActive }) => `${isActive ? 'bg-blue-600 px-4 py-1 text-white rounded-2xl' : ' '}hover:bg-blue-600 hover:px-8 hover:duration-1000 rounded-2xl hover:py-2 hover:text-white `} to='/' >Home</NavLink>
        <NavLink className={({ isActive }) => `${isActive ? 'bg-blue-600 px-4 py-1 text-white rounded-2xl' : ' '}hover:bg-blue-600 hover:px-8 hover:duration-1000 rounded-2xl hover:py-2  hover:text-white`} to='/Events' >Events</NavLink>
        <NavLink className={({ isActive }) => `${isActive ? 'bg-blue-600 px-4 py-1 text-white rounded-2xl' : ' '}hover:bg-blue-600 hover:px-8 hover:duration-1000 rounded-2xl hover:py-2 hover:text-white `} to='/category' >Category</NavLink>
        {
            user ? (
                <NavLink className={({ isActive }) => `${isActive ? 'bg-blue-600 px-4 py-1 text-white rounded-2xl' : ' '}hover:bg-blue-600 hover:px-8 hover:duration-1000 rounded-2xl hover:py-2  hover:text-white`} to='/myevents'>My Events</NavLink>
            ) : ' '}
        {
            user ? ' ' : (
                <NavLink className={({ isActive }) => `${isActive ? 'bg-blue-600 px-4 py-1 text-white rounded-2xl' : ' '}hover:bg-blue-600 hover:px-8 hover:duration-1000 rounded-2xl hover:py-2 hover:text-white `} to='/register'>Registration</NavLink>)
        }
        {
            user ? (
                <NavLink className={({ isActive }) => `${isActive ? 'bg-blue-600 px-4 py-1 text-white rounded-2xl' : ' '}hover:bg-blue-600 hover:px-8 hover:duration-1000 rounded-2xl hover:py-2  hover:text-white`} to='/myprofile'>My Profile</NavLink>
            ) : ' '}




    </>


    const navigate = useNavigate();
    const handleLogout = () => {

        logout().then(result => {

            const usee = result.user;
            toast.success(`Log out Succesfull`);
            navigate('/login')

        })
            .catch(error => {
                // toast.error(error.message);


            })

    }
    return (

        <div className='bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600'>

            <div className="navbar  shadow-sm px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-4" >
                            {
                                Links
                            }
                        </ul>
                    </div>

                    <a className="btn btn-ghost text-xl flex "><span className='text-5xl text-yellow-500'>E</span><span className='text-2xl font-bold'>vents</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-12 font-bold text-2xl">
                        {
                            Links
                        }
                    </ul>
                </div>

                <div className="navbar-end gap-3">

                    <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                        {
                            user && (user.photoURL ? (<img className='w-12 h-12 rounded-full ' src={user.photoURL} />
                            ) : (<img className='w-12 h-12 rounded-full ' src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                            ))
                        }

                    </div>
                    {
                        user ? (<button onClick={handleLogout} className='bg-blue-600 px-4 py-1 text-white rounded-sm'>Log Out</button>
                        ) : (<NavLink className='bg-blue-600 px-4 py-1 text-white rounded-sm  hover:bg-blue-600 hover:px-8 hover:duration-1000 hover:rounded-2xl hover:py-2 ' to='/login'>Log In</NavLink>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;














