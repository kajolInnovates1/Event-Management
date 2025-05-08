import React from 'react';

const Erorr = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-12'>
            <h1 className='text-2xl md:text-4xl text-red-500 text-center pb-4'>Error!</h1>
            <div>
                <img className='pb-4' src="https://i.ibb.co.com/kC1JV9L/error.jpg" alt="" />
            </div>
        </div>
    );
};

export default Erorr;