import React, { useContext, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const ResetPassword = () => {
    const { resetPass } = useContext(AuthContext);

    const emailref = useRef();
    const navigate = useNavigate();
    const handleForgetpassword = (e) => {
        e.preventDefault();
        const email = emailref.current.value;
        resetPass(email).then(() => {

            toast.success('A password Reset Email is Sent! please Check Email');
            navigate('/login');

        }).catch(error => {
            toast.error(error.message);

        })
    }
    return (
        <div>
            <Helmet>
                <title>Event Reset Password</title>
            </Helmet>

            <form onSubmit={handleForgetpassword} className="max-w-sm mx-auto bg-white p-6 rounded shadow">
                <Toaster></Toaster>
                <label className="block mb-2 font-bold">Email</label>
                <input
                    type="email"
                    ref={emailref}
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    required
                />

                <button
                    type="submit"

                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Reset
                </button>
            </form>

        </div>
    );
};

export default ResetPassword;