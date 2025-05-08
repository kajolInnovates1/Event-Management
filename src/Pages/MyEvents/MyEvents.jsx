import React, { useEffect, useState } from 'react';
import { getMyEvents, removeitem } from '../../Utility/Utility';
import MyEventSingle from '../../Components/MyEventSingle/MyEventSingle';
import { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const MyEvents = () => {
    const [viewEvents, setViewEvents] = useState([]);
    useEffect(() => {
        const data = getMyEvents();
        setViewEvents(data);





    }, []);
    const handleRemove = (eventToRemove) => {
        removeitem(eventToRemove);
        const updatedEvents = getMyEvents();
        setViewEvents(updatedEvents);
    }

    return (
        <div className='my-12 px-8 flex flex-col gap-5'>
            <Helmet>
                <title>My Favourite Event</title>
            </Helmet>
            <Toaster></Toaster>

            <h1 className=' text-2xl lg:text-5xl text-center font-bold text-blue-600 pb-8'> My Favourite Events </h1>


            {
                viewEvents.map(singleEvent => <MyEventSingle key={singleEvent.id} singleEvent={singleEvent} onRemove={() => handleRemove(singleEvent)}></MyEventSingle>)
            }



        </div>
    );
};

export default MyEvents;