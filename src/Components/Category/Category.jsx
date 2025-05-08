import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleCat from '../SingleCat/SingleCat';


const Category = () => {
    const data = useLoaderData();

    const [categorydata, setCategoryData] = useState([]);


    const handleSubmit = (text) => {
        console.log(text);
        const filtercate = data.filter(cat => cat.category.toLowerCase().trim() === text.toLowerCase().trim());
        setCategoryData(filtercate);


    }

    return (
        <div className='mt-10 mb-120 px-8'>
            <div className="dropdown dropdown-hover">
                <div className='flex justify-center text-center  mb-10 ml-170'>
                    <div tabIndex={0} role="button" className=" w-[100px] btn  p-8 bg-blue-600 text-white ">Category</div>

                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 ml-170 w-52 p-2 shadow-sm">
                    <li className='font-bold text-2xl hover:bg-blue-600 hover:text-white p-2 hover:px-8 hover:duration-1000 hover:rounded-2xl;'><a onClick={() => handleSubmit('Sports')}>Sports</a></li>
                    <li className='font-bold text-2xl hover:bg-blue-600 hover:text-white p-2 hover:px-8 hover:duration-1000 hover:rounded-2xl'><a onClick={() => handleSubmit('art')}>Art</a></li>
                    <li className='font-bold text-2xl hover:bg-blue-600 hover:text-white p-2 hover:px-8 hover:duration-1000 hover:rounded-2xl'><a onClick={() => handleSubmit('Health')}>Health</a></li>
                    <li className='font-bold text-2xl hover:bg-blue-600 hover:text-white p-2 hover:px-8 hover:duration-1000 hover:rounded-2xl'><a onClick={() => handleSubmit('Music')}>Music</a></li>
                    <li className='font-bold text-2xl hover:bg-blue-600 hover:text-white p-2 hover:px-8 hover:duration-1000 hover:rounded-2xl'><a onClick={() => handleSubmit('Workshop')}>Workshop</a></li>
                    <li className='font-bold text-2xl hover:bg-blue-600 hover:text-white p-2 hover:px-8 hover:duration-1000 hover:rounded-2xl'><a onClick={() => handleSubmit('Tech')}>Tech</a></li>
                    <li className='font-bold text-2xl hover:bg-blue-600 hover:text-white p-2 hover:px-8 hover:duration-1000 hover:rounded-2xl'><a onClick={() => handleSubmit('Business')}>Business</a></li>
                </ul>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-120 gap-5'>

                <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                    {
                        categorydata && categorydata.map(singlecat => <SingleCat key={singlecat.id} singlecat={singlecat}></SingleCat>)


                    }
                </Suspense>
            </div>


        </div>
    );
};

export default Category;