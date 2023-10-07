/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCards from '../ServiceCards/ServiceCards';



const Service = () => {

   const services = useLoaderData([]);
   //console.log(services);

    return (
        <div className=''>
            <h1 className='text-center text-rose-500 font-bold text-3xl mt-10'>Our Packages</h1>
            <p className='text-center font-semibold mt-3'>Life is a gift, and every day is a new package waiting to be unwrapped. Embrace each moment, cherish the surprises,<br></br> and make the most of every opportunity that comes your way.</p>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 mx-7'>
       {
            services?.map((serviceA) =><ServiceCards serviceA = {serviceA}>
        </ServiceCards>)
        }
       </div>


        </div>
    );
};

export default Service;