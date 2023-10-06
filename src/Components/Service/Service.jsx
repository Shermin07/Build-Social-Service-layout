/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCards from '../ServiceCards/ServiceCards';


const Service = () => {

   const services = useLoaderData([]);
   console.log(services);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4'>
        {
            services?.map((serviceA) =><ServiceCards serviceA = {serviceA}>



            </ServiceCards>)
        }
        </div>
    );
};

export default Service;