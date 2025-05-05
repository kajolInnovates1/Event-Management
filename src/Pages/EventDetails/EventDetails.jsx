import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const EventDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const newdata = data.find(val => val.id === id);
    const { thumbnail, name, category, date, location, entryFee, ratings, description, tags } = newdata;




    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl">
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
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
                        Book Now
                    </button>
                </div>
            </div>
        </div>

    );
};

export default EventDetails;