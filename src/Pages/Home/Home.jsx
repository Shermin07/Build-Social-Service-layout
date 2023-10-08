import EventShow from "../../Components/EventShow/EventShow";
import Footer from "../../Components/Footer/Footer";

import Header from "../../Components/Header/Header";
import Reviews from "../../Components/Reviews/Reviews";
import Service from "../../Components/Service/Service";



const Home = () => {
    return (
        <div className="bg-gray-200">
       
        <Header></Header>
        <Service></Service>
      <EventShow></EventShow>
      <Reviews></Reviews>
      <Footer></Footer>
         
        </div>
    );
};

export default Home;