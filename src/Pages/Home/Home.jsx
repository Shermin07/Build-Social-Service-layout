import EventShow from "../../Components/EventShow/EventShow";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Service from "../../Components/Service/Service";



const Home = () => {
    return (
        <div className="bg-gray-200">
       
        <Header></Header>
        <Service></Service>
      <EventShow></EventShow>
          <Footer></Footer>
        </div>
    );
};

export default Home;