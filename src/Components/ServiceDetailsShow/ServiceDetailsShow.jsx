/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceDetailsShow = ({details}) => {
    const {id, image, title, title_color, price, price_color, description,description_details} = details || {} ;


    return (
        <div>
       <div className="hero min-h-screen bg-sky-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image}className="max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6">{description_details}</p>
      <p className="mb-2 font-semibold">Event Expense: {price}</p>
      <Link   to='/'><button className="btn bg-sky-600 text-white">Go Home</button></Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ServiceDetailsShow;