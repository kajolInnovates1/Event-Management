import React from "react";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router";
import UpcomingEvent from "../../Components/UpcomingEvent/UpcomingEvent";
import Service from "../../Components/Service/Service";
import Sponsor from "../../Components/Sponsor/Sponsor";
import './Home.css'
import { Toaster } from "react-hot-toast";

const Home = () => {


    const data = useLoaderData();





    return (


        <>
            <div className="bg-base-300">
                <Toaster></Toaster>

                <div className="pt-48">
                    <Slider></Slider>

                </div>


                <div className="px-8">
                    <UpcomingEvent data={data}></UpcomingEvent>
                </div>

                <div className="">
                    <Service></Service>
                </div>
                <div className="">
                    <Sponsor></Sponsor>

                </div>

            </div>


















        </>

    );
};

export default Home;



