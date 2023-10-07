import { Link } from "react-router-dom";


const Register = () => {

     const handleRegister = e =>{
        const  name = e.target.name.value ;
        const email = e.target.email.value ;
        const password = e.target.password.value ;

        console.log(name, email, password)
     }

    return (
        <div className=" bg-base-200">
        <h1 className="text-3xl  mt-5 font-bold text-center">Please Register </h1>
      <div className="hero  bg-base-200">
<div className="hero-content">
<div className="text-center lg:text-left">
 
</div>
<div className="card w-[350px] md:[550px] lg:w-[700px] flex-shrink-0   shadow-2xl bg-base-100">
  <form onSubmit={handleRegister} className="card-body w-[300px] md:[400px] lg:w-[500px]">
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
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-accent">Login</button>
    </div>
  </form>

  <p className="ml-7 mb-4">Already have an account? Please 
    <Link to='/login' className="text-teal-500 ml-2 font-bold"> Login</Link>
  </p>
</div>
</div>
</div>
    </div>
    );
};

export default Register;