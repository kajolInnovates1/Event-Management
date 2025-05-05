import React, { useEffect, useState } from 'react';
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
        <div>
            <h1>All Events Here</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    display.map(single => <UpcomingSingle key={single.id} single={single}></UpcomingSingle>)
                }

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