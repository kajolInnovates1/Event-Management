import React from 'react';
import { Link } from 'react-router';

const SingleCat = ({ singlecat }) => {
    const { id, thumbnail, name, category, date, location, entryFee, ratings, description, tags } = singlecat;

    return (
        <div>

            <div className=" rounded-2xl shadow-md  p-4 hover:shadow-lg transition-all border-0 bg-white" data-aos='zoom-out'>
                <img
                    src={thumbnail}
                    alt={name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                    <span className="text-sm text-blue-500 font-medium">{category}</span>
                    <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
                    <div className="text-sm text-gray-600 mt-2">
                        📍 <strong>Location:</strong> {location} <br />
                        📅 <strong>Date:</strong> {date} <br />
                        💳 <strong>Entry Fee:</strong> {entryFee} <br />
                        ⭐ <strong>Rating:</strong> {ratings}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>


                    <Link to={`/event-details/${id}`}>
                        <button className="mt-4 w-full text-blue-600 hover:text-white border border-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>



        </div>
    );
};

export default SingleCat;