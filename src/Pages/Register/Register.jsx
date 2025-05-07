import React, { useState, useContext } from 'react';

import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, setUser, emailverify, updatepro } = useContext(AuthContext);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Profile = {
            displayName: name,
            photoURL: url


        };

        const validationMsg = validatePassword(password);
        if (validationMsg) {
            setWrongMessage(validationMsg);
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;

                emailverify().then(() => {
                    alert('Send Email verification Please cheack Email');
                    alert('SignUp Succesfull');
                    setCheck(true);

                }).catch(error => {
                    alert(error);
                });

                updatepro(profile).then(result => {
                    alert('update Profile Succesfull');
                }).catch(error => {
                    alert(error);
                });


            })
            .catch(error => {
                setWrongMessage(error.message);
                console.log(error);
            });
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <h1 className='font-bold text-xl text-center p-4 text-blue-600'>Registration Form</h1>
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
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <h3 className="font-bold">Accept Terms and Conditions</h3>
                        </span>

                        <button className="btn bg-blue-600 mt-4 w-full text-white">Sign Up</button>
                    </form>

                    <h3 className="text-base-500 font-bold mt-4">
                        Already have an account?{' '}
                        <Link to="/login">
                            <span className="text-blue-500 hover:underline">Login</span>
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Register;
