/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsShow from "../../Components/ServiceDetailsShow/ServiceDetailsShow";
import Footer from "../../Components/Footer/Footer";





const ServiceDetails = () => {
    const [details, setDetails] = useState({}) ;
    
    const services = useLoaderData() ;
   // console.log(services) ;
   const {id} = useParams() ;

   useEffect(() =>{
    const findDetails = services?.find((service) => service.id === parseInt(id, 10));
    console.log(findDetails);
    setDetails(findDetails) 
   }
   
   ,[id,services])
  
   return (
        <div>
            
        <ServiceDetailsShow details = {details}></ServiceDetailsShow>
        <div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default ServiceDetails;