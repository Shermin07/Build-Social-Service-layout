/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServiceCards = ({serviceA}) => {

const {id, image, title, title_color, price, price_color, description  } = serviceA || {};


    return (
        <div>
            <div className="card h-[500px]  bg-base-100 shadow-xl">
  <figure><img className="w-full" src={image} alt="events" /></figure>
  <div className="card-body">
    <h2 style={{color: title_color}} className="card-title">{title}</h2>
    <p >{description}</p>
    <p style={{color: price_color}}>{price}</p>
    <div className="card-actions ">
    <Link to = {`/serviceA/${id}`}>  <button  className="btn text-white" style={{background: price_color}}>See Details</button></Link>
    </div>
  </div>
</div>  
        </div>
    );
};

export default ServiceCards;