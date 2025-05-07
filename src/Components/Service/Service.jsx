import React from 'react';
import { GiGreenhouse } from "react-icons/gi";
import { FaExpand, FaFlagCheckered, FaRegHandshake } from "react-icons/fa";


const Service = () => {
    return (
        <div>
            <div className="px-8 mt-12 mb-12 ">
                <div className="shadow-2xl p-8 text-center space-y-4 rounded-sm mb-4">
                    <h1 className="text-2xl font-bold text-blue-600">WHAT IS THE INTERNATIONAL CONFERENCE 2025 </h1>
                    <h1 className="font-bold text-xl text-blue-600">BIGGEST BUSINESS EVENT</h1>
                    <p>International Conference 2025 is one of the largest global business events, bringing together top entrepreneurs, investors, and industry leaders. The event focuses on business innovation, technology, and market trends. It offers speeches, discussions, and networking to boost global collaboration.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-12 gap-5">


                    <div className="shadow-2xl p-8 text-center space-y-4 rounded-2xl">
                        <div className='flex justify-center'><FaRegHandshake size={70} color='blue'></FaRegHandshake></div>

                        <h1 className="font-bold text-xl text-blue-600">FIRST SERVICE</h1>

                        <p className="text-shadow-base-300">
                            Our first service offers expert business consultation to help startups and companies grow strategically. We analyze market trends and provide tailored advice. This service ensures smart planning and better decision-making.
                        </p>
                    </div>
                    <div className="shadow-2xl p-8 text-center space-y-4 rounded-2xl">
                        <div className='flex justify-center'><GiGreenhouse size={70} color='blue'></GiGreenhouse></div>

                        <h1 className="font-bold text-xl text-blue-600">PROPERTY MANAGEMENT</h1>
                        <p>
                            We provide professional property management services for both residential and commercial properties. Our team handles rent collection, maintenance, and tenant communication. This service ensures your property stays profitable and stress-free                    </p>
                    </div>
                    <div className="shadow-2xl p-8 text-center space-y-4 rounded-2xl">
                        <div className='flex justify-center'><FaFlagCheckered size={70} color='blue'></FaFlagCheckered></div>

                        <h1 className="font-bold text-xl text-blue-600">INTERNATIONAL BUSINESS</h1>
                        <p>
                            We assist businesses in expanding globally through expert guidance on trade, regulations, and market entry. Our service connects you with international partners and opportunities. Grow your business beyond borders with confidence.                    </p>
                    </div>

                    <div className="shadow-2xl p-8 text-center space-y-4 rounded-2xl">
                        <div className='flex justify-center'><FaExpand size={70} color='blue'></FaExpand></div>

                        <h1 className="font-bold text-xl text-blue-600">ENTERPRISE EXPADING</h1>
                        <p>
                            We help enterprises grow by identifying new markets, scaling operations, and improving strategies. Our expert team supports your business every step of the way. Expand with confidence and long-term success.                    </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Service;