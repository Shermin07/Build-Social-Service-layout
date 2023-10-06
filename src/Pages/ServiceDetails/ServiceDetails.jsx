/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailShow from "../../Components/serviceDetailShow/ServiceDetailShow";




const ServiceDetails = () => {
 
    const services = useLoaderData([]);
    const [details, setDetails] = useState({}) ;

   console.log(details)

    const {id} = useParams();
   //console.log(services);

   useEffect( () =>{
    const findServiceDetails = services?.find( serviceDetails => serviceDetails.id === id)
    setDetails(findServiceDetails) ;
  
   },[id,services])
 
     
    return (
        <div>
        <ServiceDetailShow details = {details} ></ServiceDetailShow>
          
        </div>
    );
};

export default ServiceDetails;