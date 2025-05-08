import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Footer = () => {
    const { user } = useContext(AuthContext);

    const Links = (
        <>
            <NavLink className={({ isActive }) => isActive ? 'text-white underline' : 'hover:text-blue-100'} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-white underline' : 'hover:text-blue-100'} to='/Events'>Events</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-white underline' : 'hover:text-blue-100'} to='/category'>Category</NavLink>
            {
                user && (
                    <NavLink className={({ isActive }) => isActive ? 'text-white underline' : 'hover:text-blue-100'} to='/myevents'>My Events</NavLink>
                )
            }
            {
                !user && (
                    <NavLink className={({ isActive }) => isActive ? 'text-white underline' : 'hover:text-blue-100'} to='/register'>Registration</NavLink>
                )
            }
        </>
    );

    return (
        <footer className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white py-10 px-6 h-[800px] font-bold text-2xl space-y-4 md:pt-[300px]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Services */}
                <div>
                    <h6 className="footer-title text-lg mb-2">Services</h6>
                    <nav className="flex flex-col gap-2">
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                </div>

                {/* Navigation */}
                <div>
                    <h6 className="footer-title text-lg mb-2">Menu</h6>
                    <nav className="flex flex-col gap-2">
                        {Links}
                    </nav>
                </div>

                {/* Policies */}
                <div>
                    <h6 className="footer-title text-lg mb-2">Legal</h6>
                    <nav className="flex flex-col gap-2">
                        <NavLink to="/terms" className="hover:text-blue-100">Terms & Conditions</NavLink>
                        <NavLink to="/policy" className="hover:text-blue-100">Privacy Policy</NavLink>
                    </nav>
                </div>

                {/* Social Media */}
                <div>
                    <h6 className="footer-title text-lg mb-2">Follow Us</h6>
                    <div className="grid grid-flow-col gap-4 mt-2">
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="X" className="w-6 h-6" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-6 h-6" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10 text-sm text-blue-200">
                &copy; {new Date().getFullYear()} Event Zone. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
