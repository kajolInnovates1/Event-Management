import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

const MyEventSingle = ({ singleEvent, onRemove }) => {
    const { thumbnail, name, category, date, location, entryFee, description } = singleEvent;




    return (
        <div>


            <div className="card lg:card-side bg-base-100 shadow-sm">
                <Toaster></Toaster>
                <figure>
                    <img className='rounded-2xl p-4'
                        src={thumbnail}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3 className='text-blue-600 text-xl'>{category}</h3>
                    <h5 className='font-bold text-xl'>{location}</h5>
                    <p className=' text-base-400 text-xl'>{description}</p>
                    <h1 className='font-bold text-xl md:text-2xl lg:text-3xl '>{entryFee}</h1>
                    <h1 className='font-bold text-xl md:text-2xl lg:text-3xl '>{date}</h1>
                    <div className="card-actions justify-end">
                        <button onClick={onRemove} className="btn bg-blue-600 text-white">Cancel Event</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyEventSingle;