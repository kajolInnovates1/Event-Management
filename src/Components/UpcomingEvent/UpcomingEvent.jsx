import React, { useEffect, useState } from 'react';
import UpcomingSingle from '../UpcomingSingle/UpcomingSingle';

const UpcomingEvent = ({ data }) => {
    const [upComing, setUpComing] = useState([]);
    const [showAll, setShow] = useState(false);
    if (showAll) {
        window.scrollTo(0, 1500);
    }
    else {
        window.scrollTo(0, 300);

    }

    useEffect(() => {
        const filteredData = data.filter(item => item.isUpcoming === true);

        if (showAll === false) {
            const filterSlice = filteredData.slice(0, 6);
            setUpComing(filterSlice);

        }
        else {
            setUpComing(filteredData);

        }
    }, [data, showAll]);


    return (
        <div className='my-12'>
            <h1 className=' text-2xl lg:text-5xl text-center font-bold text-blue-600 pb-8'>Upcoming Events</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    upComing.map(single => <UpcomingSingle key={single.id} single={single}></UpcomingSingle>)
                }


            </div>
            <div className='flex justify-center'>
                <button onClick={() => setShow(!showAll)} className="mt-4  bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition text-center">
                    {
                        showAll ? 'Hide' : 'View All'
                    }

                </button>


            </div>



        </div>
    );
};

export default UpcomingEvent;