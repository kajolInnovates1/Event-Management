import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import UpcomingSingle from '../UpcomingSingle/UpcomingSingle';

const Events = () => {
    const data = useLoaderData();

    const [display, setDisplay] = useState([]);
    const [showAll, setshowAll] = useState(false);

    useEffect(() => {


        if (showAll === false) {
            const filterSlice = data.slice(0, 6);
            setDisplay(filterSlice);

        }
        else {
            setDisplay(data);

        }
    }, [data, showAll]);

    return (
        <div className='my-12 px-8 pt-12'>
            <h1 className=' text-2xl lg:text-5xl text-center font-bold text-blue-600 pb-8'> All Events </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                    {
                        display.map(single => <UpcomingSingle key={single.id} single={single}></UpcomingSingle>)
                    }
                </Suspense>

            </div>

            <div className='flex justify-center'>
                <button onClick={() => setshowAll(!showAll)} className="mt-4  bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition text-center">
                    {
                        showAll ? 'Hide' : 'View All'
                    }

                </button>


            </div>


        </div>
    );
};

export default Events;