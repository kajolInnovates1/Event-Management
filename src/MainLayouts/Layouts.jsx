import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './Layouts.css'

const Layouts = () => {
    return (
        <div>

            <header className='text-white back'>
                <Navbar></Navbar>

            </header>
            <main>
                <Outlet></Outlet>

            </main>
            <footer>
                <Footer></Footer>

            </footer>




        </div>
    );
};

export default Layouts;