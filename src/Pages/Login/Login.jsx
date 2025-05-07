import React, { useState, useContext, useRef } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router';

import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

const Login = () => {

    const { signInUser, setUser, resetPass } = useContext(AuthContext);
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [wrongMessage, setWrongMessage] = useState('');


    const validatePassword = (password) => {
        if (password.length < 6) {
            return 'Password must be at least 6 characters long.';
        }
        if (!/[A-Z]/.test(password)) {
            return 'Password must contain at least one uppercase letter.';
        }
        if (!/[a-z]/.test(password)) {
            return 'Password must contain at least one lowercase letter.';
        }
        if (!/\d/.test(password)) {
            return 'Password must contain at least one digit.';
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return 'Password must contain at least one special character.';
        }
        return '';
    };

    const provider = new GoogleAuthProvider();
    const handlegoggle = () => {

        signInWithPopup(auth, provider).then(result => {
            toast.success('sign In Succesfull');
        }).catch(error => {
            console.log(error);
        })

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const validationMsg = validatePassword(password);
        if (validationMsg) {
            setWrongMessage(validationMsg);
            return;
        }

        signInUser(email, password).then(result => {
            if (!result.user.emailVerified) {

                toast.success('please Verified Email');
            }
            else {
                setUser(result.user);
                navigate('/');
                toast.success('LogIn succesfull');

            }


        })
            .catch(error => {
                toast.error(error.message);
            })


    };
    const emailref = useRef();

    const handleForgetpassword = () => {
        const email = emailref.current.value;
        resetPass(email).then(() => {

            toast.success('A password Reset Email is Sent! please Check Email');
        }).catch(error => {
            toast.error(error.message);

        })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Toaster></Toaster>

            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-center text-blue-600 p-4'>Login Form</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <label className="label font-bold">Email</label>
                        <input type="email" name='email' ref={emailref} className="input" placeholder="Email" required />

                        <label className="label font-bold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setWrongMessage('');
                            }}
                            name='password'
                            className="input"
                            placeholder="Password"
                            required
                        />

                        <div>
                            <a onClick={handleForgetpassword} className="link link-hover font-bold">Forgot password?</a>
                        </div>

                        {wrongMessage && <p className='text-red-500 font-bold'>{wrongMessage}</p>}

                        <button className="btn bg-blue-600 mt-4 w-full text-white">Login</button>
                    </form>
                    <p className='text-center text-blue-600 text-3xl pb-2'>Or</p>
                    <div>
                        <button onClick={handlegoggle} className='btn text-blue-600 border-blue-600 rounded-3xl px-6 py-2 w-full hover:bg-blue-600 hover:text-white'>Sign In With Google</button>
                    </div>


                    <h3 className='text-base-500 font-bold mt-4'>
                        Don't have an Account?{' '}
                        <Link to='/register'>
                            <span className='text-blue-500 hover:underline'>Register</span>
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Login;
