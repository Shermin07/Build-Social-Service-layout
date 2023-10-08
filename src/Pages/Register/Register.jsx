import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AiFillEyeInvisible,  AiFillEye} from 'react-icons/ai'
import { sendEmailVerification } from "firebase/auth";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('') ;

    const [registerSuccess, setRegisterSuccess] = useState('') ;
    const [showPassword, setShowPassword] = useState(false) ;

     const handleRegister = e =>{

      setRegisterError('');
      setRegisterSuccess('');

        e.preventDefault();
        const  name = e.target.name.value ;
        const email = e.target.email.value ;
        const photo = e.target.photo.value ;
        const password = e.target.password.value ;

        console.log(name, email, password,photo)

        if(password < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            toast('Password should be more than 6 charecters and one upper letter and a special cherecter')
        }

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
           
            toast("User registered successfully!")
            sendEmailVerification(result.user)
            .then(() =>{
                toast('Please check your email and verify your account')
            })
            
            

        })
        .catch(error =>{
            console.error(error)
           
        })
     }

    return (
        <div className=" bg-gray-50">
        <h1 className="text-3xl text-teal-500 pt-4 pb-4 font-bold text-center">Please Register </h1>
      <div className="hero  ">
<div className="hero-content">
<div className="text-center lg:text-left">
 
</div>
<div className="card w-[350px] md:[550px] lg:w-[700px] bg-teal-50  flex-shrink-0   shadow-2xl ">
  <form onSubmit={handleRegister} className="card-body  w-[300px] md:[400px] lg:w-[500px]">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" name="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" placeholder="photo URL" name="photo" className="input input-bordered" required />
    </div>
    <div className="form-control relative">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input  type={showPassword ? 'text' :'password'} placeholder="password" name="password" className="input input-bordered " required />

      <span className="absolute  mt-[51px] ml-[410px]" onClick={ () => setShowPassword(!showPassword)}>
      {
       showPassword?<AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>  } 
      </span>
      
      
     
    </div>
    <div className="form-control mt-6">
     <Link> <button className="btn btn-accent">Register</button></Link>
    </div>
  </form>
  {
    registerError && <p className="ml-7 text-red-400 mb-3">{registerError}</p>
    
  }
  {
    registerSuccess && <p className="ml-7 text-green-700 mb-3">{registerSuccess}</p>
  }


  <p className="ml-7 mb-4">Already have an account? Please 
    <Link to='/login' className="text-teal-500 ml-2 font-bold"> Login</Link>
  </p>
  <ToastContainer />
</div>
</div>
</div>
    </div>
    );
};

export default Register;