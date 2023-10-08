import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const ContactUs = () => {

    const {user} = useContext(AuthContext);

    const handleContact = (e) =>{

        e.preventDefault() ;
        const  name = e.target.name.value ;
        const email = e.target.email.value ;
        const phone = e.target.phone.value ;
        const message = e.target.message.value ;
        console.log(name,email,phone,message) ;


    }



    return (
        <div>
         <div className="hero min-h-screen bg-gray-50">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    <img className="h-[400px] ml-12" src="https://www.successmantra.in/assets/assestsnew/images/contact-us.png"></img>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleContact} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone No</span>
          </label>
          <input type="text" placeholder="Phone No" name="phone" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          
          <input type="text" placeholder="Message" name="message" className="input input-bordered border-1 py-12" required />
      
        
        </div>
        <div className="form-control mt-6">
         <Link > <button className="btn btn-primary">Send</button></Link>
        </div>
      </form>
    </div>
  </div>
</div>   
        </div>
    );
};

export default ContactUs;