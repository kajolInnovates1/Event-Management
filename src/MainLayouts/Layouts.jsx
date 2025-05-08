import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './Layouts.css'

const Layouts = () => {
    const { state } = useNavigation();
    return (
        <div>

            <header className='bg-base-300'>
                <Navbar></Navbar>

            </header>
            <main className=''>
                {
                    state == 'loading' ? (<span className="loading loading-spinner loading-xl"></span>
                    ) : (<Outlet></Outlet>)
                }


            </main>
            <footer>
                <Footer></Footer>

            </footer>




        </div>
    );
};

export default Layouts;