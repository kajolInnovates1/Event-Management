import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const { updatepro, setUser, user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;

        const profile = {
            displayName: name,
            photoURL: url,
            email: email
        };

        updatepro(profile).then(() => {
            setUser({ ...user, ...profile });
            toast.success('Profile updated successfully!');
        }).catch(error => {
            toast.error(error.message);
        });
    };

    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-12 space-y-4 mb-5'>
                <h1 className='font-bold text-4xl'>Name: {user?.displayName}</h1>
                <h3 className='font-bold text-3xl'>Email: {user?.email}</h3>
                <p className='font-bold text-2xl'>photoURL: {user?.photoURL}</p>
                <img src={user?.photoURL} alt={user?.photoURL}></img>
            </div>

            <div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
                    <h2 className="text-xl font-bold mb-4">Update Profile</h2>

                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />

                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />

                    <label className="block mb-2">URL</label>
                    <input
                        type="url"
                        name="url"
                        defaultValue={user?.photoURL}
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />

                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
