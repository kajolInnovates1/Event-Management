import React, { useState } from 'react';
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
        <div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">Category</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSubmit('Sports')}>Sports</a></li>
                    <li><a onClick={() => handleSubmit('art')}>Art</a></li>
                    <li><a onClick={() => handleSubmit('Health')}>Health</a></li>
                    <li><a onClick={() => handleSubmit('Music')}>Music</a></li>
                    <li><a onClick={() => handleSubmit('Workshop')}>Workshop</a></li>
                    <li><a onClick={() => handleSubmit('Tech')}>Tech</a></li>
                    <li><a onClick={() => handleSubmit('Business')}>Business</a></li>


                </ul>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    categorydata && categorydata.map(singlecat => <SingleCat key={singlecat.id} singlecat={singlecat}></SingleCat>)


                }
            </div>


        </div>
    );
};

export default Category;