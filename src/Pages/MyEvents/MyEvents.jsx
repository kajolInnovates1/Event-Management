import React, { useEffect, useState } from 'react';
import { getMyEvents } from '../../Utility/Utility';
import MyEventSingle from '../../Components/MyEventSingle/MyEventSingle';

const MyEvents = () => {
    const [viewEvents, setViewEvents] = useState([]);
    useEffect(() => {
        const data = getMyEvents();
        setViewEvents(data);





    }, []);

    return (
        <div className='my-12 px-8 flex flex-col gap-5'>

            <h1 className=' text-2xl lg:text-5xl text-center font-bold text-blue-600 pb-8'> My Favourite Events </h1>


            {
                viewEvents.map(singleEvent => <MyEventSingle key={singleEvent.id} singleEvent={singleEvent}></MyEventSingle>)
            }



        </div>
    );
};

export default MyEvents;