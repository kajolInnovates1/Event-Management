import React, { useState, useContext } from 'react';

import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.config';

const Register = () => {

    const { createUser, emailverify, updatepro } = useContext(AuthContext);
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
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const handlegoggle = () => {

        signInWithPopup(auth, provider).then(result => {
            toast.success('sign In Succesfull');
        }).catch(error => {
            console.log(error);
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const check = e.target.che.checked;
        const profile = {
            displayName: name,
            photoURL: url


        };
        if (!check) {
            toast.error('please accept terms and condition');
            return;
        }



        const validationMsg = validatePassword(password);
        if (validationMsg) {
            setWrongMessage(validationMsg);
            return;
        }

        createUser(email, password)
            .then(result => {


                emailverify().then(() => {

                    toast.success('Send Email verification Please cheack Email');



                }).catch(error => {
                    toast(error.message)
                });



                updatepro(profile).then(result => {

                }).catch(error => {
                    toast.error(error.message);
                });



            })
            .catch(error => {
                setWrongMessage(error.message);

            });

        toast.success('SignUp Succesfull');
        navigate('/');

    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Toaster></Toaster>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <h1 className='font-bold text-3xl text-center p-4 text-blue-600'>Registration Form</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <label className="label font-bold">Name</label>
                        <input type="text" name="name" className="input" placeholder="Name" required />

                        <label className="label font-bold">Photo URL</label>
                        <input type="text" name="url" className="input" placeholder="Photo URL" required />

                        <label className="label font-bold">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />

                        <label className="label font-bold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setWrongMessage(validatePassword(e.target.value));
                            }}
                            name="password"
                            className="input"
                            placeholder="Password"
                            required
                        />
                        {wrongMessage && <p className="text-red-500 text-sm">{wrongMessage}</p>}

                        <span className="flex gap-1 items-center pt-1">
                            <input type="checkbox" name='che' className="checkbox" />
                            <h3 className="font-bold">Accept Terms and Conditions</h3>
                        </span>

                        <button className="btn bg-blue-600 mt-4 w-full text-white">Sign Up</button>
                    </form>

                    <p className='text-center text-blue-600 text-3xl pb-2'>Or</p>
                    <div>
                        <button onClick={handlegoggle} className='btn text-blue-600 border-blue-600 rounded-3xl px-6 py-2 w-full hover:bg-blue-600 hover:text-white'>Sign In With Google</button>
                    </div>

                    <h3 className="text-base-500 font-bold text-xl mt-4">
                        Already have an account?{' '}
                        <Link to="/login">
                            <span className="text-blue-500 text-2xl hover:underline">Login</span>
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Register;
