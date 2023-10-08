import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, auth } from "../../Provider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEyeInvisible,  AiFillEye} from 'react-icons/ai'
import { GithubAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";



const Login = () => {

    const {signIn} = useContext(AuthContext) ;
    const [loginError, setLoginError] = useState('') ;
    const [loginSuccess, setLoginSuccess] = useState('') ;
    const [showPassword, setShowPassword] = useState(false) ;
    
    const emailRef = useRef(null) ;
    const handleForgetPassword = () =>{
        
        const email = emailRef.current.value ;

        if(!email){
            console.log('Please provide an email',emailRef.current.value)
            return ;
        } 
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            console.log('Please write a valid email')
            return ;
        }


        sendPasswordResetEmail(auth, email)
        .then(() =>{
          toast('please check your email') ;
           
        })
        .catch(error =>{
            console.log(error) ;
        })
    }



    const handleLogin = e =>{

       
        setLoginSuccess('');
        setLoginError('');
        e.preventDefault();

        const  name = e.target.name.value ;
        const email = e.target.email.value ;
        const password = e.target.password.value ;

        console.log(name, email, password) ;

        if(password < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            toast('Password should be more than 6 charecters and one upper letter and a special cherecter')
        }

     signIn(email, password)
     .then(result =>{
        console.log(result.user);
       
        toast("User login successfully!")
     })
     .catch(error =>{
        toast(error)
     }) ;

    } ;
     
    const githubProvider = new GithubAuthProvider() ;
    const handleGithubLogin = () =>{
       
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error) ;
        })

    }

    return (
        <div className=" bg-gray-200">
            <h1 className="text-3xl  mt-5 font-bold text-center">Login Your Account </h1>
          <div className="hero">
  <div className="hero-content">
    <div className="text-center lg:text-left">
     
    </div>
    <div className="card w-[350px] md:[550px] lg:w-[700px] flex-shrink-0   shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body w-[300px] md:[400px] lg:w-[500px]">
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
          <input type="email" placeholder="email" name="email" ref={emailRef}  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  type={showPassword ? 'text' :'password'} placeholder="password" name="password" className="input input-bordered " required />

      <span className="absolute  mt-[51px] ml-[410px]" onClick={ () => setShowPassword(!showPassword)}>
      {
       showPassword?<AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>  } 
      </span>




          <label className="label">
            <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    

      {
    loginError && <p className="ml-7 text-red-400 mb-3">{loginError}</p>
    
  }
  {
    loginSuccess && <p className="ml-7 text-green-700 mb-3">{loginSuccess}</p>
  }


      <p className="ml-7 mb-4">Don't have an account? Please 
        <Link to='/register' className="text-blue-600 ml-2 font-bold"> Register</Link>
      </p>
     <div>
    
     <Link><button onClick={handleGithubLogin}  className="btn btn-primary mb-4 ml-7">Login with Github</button></Link>
     </div>
     <ToastContainer />
    </div>
    

  </div>
 
</div>
        </div>
    );
};

export default Login;