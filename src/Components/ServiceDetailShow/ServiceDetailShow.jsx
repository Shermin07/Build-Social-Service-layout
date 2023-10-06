/* eslint-disable no-unused-vars */
import React from 'react';

const ServiceDetailShow = ( {details} ) => {
  
   const {id, image, title, title_color, price, price_color, description  }  = details || {}
    

    return (
        <div>
          <div className="card  bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt="event details" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetailShow;