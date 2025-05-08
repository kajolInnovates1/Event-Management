import React, { useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addMyEvents } from '../../Utility/Utility';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const EventDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const data = useLoaderData();
    const newdata = data.find(val => val.id === id);
    const { thumbnail, name, category, date, location, entryFee, ratings, description, tags } = newdata;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handlebook = async (e) => {
        e.preventDefault();
        setLoading(true);

        const customer = {
            name: username,
            email: email
        };

        try {
            // Simulate API call or add your real API function here
            await addMyEvents(newdata);
            toast.success('Booking Successful');
            navigate('/myevents');
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 my-12 bg-white shadow-lg rounded-2xl">
            <Helmet>
                <title>Event Details</title>
            </Helmet>
            <Toaster />
            <img
                src={thumbnail}
                alt={name}
                className="w-full h-80 object-cover rounded-xl mb-6"
            />

            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                <div className="text-blue-500 font-medium text-lg">{category}</div>

                <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
                    <p>📍 <strong>Location:</strong> {location}</p>
                    <p>📅 <strong>Date:</strong> {date}</p>
                    <p>💳 <strong>Entry Fee:</strong> {entryFee}</p>
                    <p>⭐ <strong>Rating:</strong> {ratings}</p>
                </div>

                <p className="text-gray-700 text-base leading-relaxed">{description}</p>

                {tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, i) => (
                            <span key={i} className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-700">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-6">
                    <form onSubmit={handlebook}>
                        <label className="input validator">
                            <input
                                type="text"
                                required
                                placeholder="Name"
                                pattern="[A-Za-z][A-Za-z0-9\-]*"
                                minLength="3"
                                maxLength="30"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2  rounded-xl focus:outline-none "
                            />
                        </label>
                        <p className="text-sm text-gray-500">Must be 3–30 characters, letters/numbers/dashes only</p>

                        <label className="input validator mt-4 block">
                            <input
                                type="email"
                                placeholder="mail@site.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2  rounded-xl focus:outline-none "
                            />
                        </label>

                        <br />
                        <button
                            disabled={loading}
                            className="bg-blue-600 text-white px-6 py-2 my-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10"
                                            stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                                    </svg>
                                    Booking...
                                </span>
                            ) : (
                                'Reserve Seat'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
