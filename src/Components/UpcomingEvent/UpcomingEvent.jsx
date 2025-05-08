import React, { Suspense, useEffect, useState } from 'react';
import UpcomingSingle from '../UpcomingSingle/UpcomingSingle';
import { Helmet } from 'react-helmet-async';

const UpcomingEvent = ({ data }) => {
    const [upComing, setUpComing] = useState([]);
    const [showAll, setShow] = useState(false);

    // Filter and update upcoming events based on showAll
    useEffect(() => {
        if (Array.isArray(data)) {
            // Proceed normally
            const filteredData = data.filter(item => item?.isUpcoming === true);
            if (showAll) {
                setUpComing(filteredData);
            } else {
                setUpComing(filteredData.slice(0, 6));
            }

        }

    }, [data, showAll]);

    // Handle scroll based on view toggle
    useEffect(() => {
        window.scrollTo(0, showAll ? 1500 : 300);
    }, [showAll]);

    return (
        <div className='my-12'>
            <Helmet>
                <title>Upcoming Events</title>
            </Helmet>

            <h1 className='text-2xl lg:text-5xl text-center font-bold text-blue-600 pb-8' data-aos='flip-left'>
                Upcoming Events
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                    {
                        upComing.map(single => (
                            <UpcomingSingle key={single.id} single={single} />
                        ))
                    }
                </Suspense>
            </div>

            <div className='flex justify-center'>
                <button
                    onClick={() => setShow(!showAll)}
                    className="mt-4 text-blue-600 hover:text-white border border-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition text-center"
                >
                    {showAll ? 'Hide' : 'View All'}
                </button>
            </div>
        </div>
    );
};

export default UpcomingEvent;
