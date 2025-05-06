import React from "react";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router";
import UpcomingEvent from "../../Components/UpcomingEvent/UpcomingEvent";

const Home = () => {


    const data = useLoaderData();





    return (


        <>

            <Slider></Slider>
            <div className="px-8">
                <UpcomingEvent data={data}></UpcomingEvent>
            </div>












        </>

    );
};

export default Home;



