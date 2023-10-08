import { Link, NavLink } from "react-router-dom"

import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navber = () => {

   const {user,logOut} = useContext(AuthContext) ;

   const handleSignOut = () =>{
    logOut()
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.error(error)
    })
   }



    const navLinks = <>


        <li className="ml-3 text-lg"> <NavLink to='/' className='text-gray-600 font-semibold '> Home </NavLink></li>
        <li className="ml-3 text-lg"> <NavLink to='/aboutUs' className='text-gray-600  font-semibold '> About Us </NavLink></li>

        <li className="ml-3 text-lg"> <NavLink to='/contactUs' className='text-gray-600  font-semibold '> Contacts </NavLink></li>
    
        <li className="ml-3 text-lg"> <NavLink to='/login' className='text-gray-600  font-semibold'> Login </NavLink> </li>
        <li className="ml-3 text-lg"> <NavLink to='/register' className='text-gray-600 font-semibold'> Register </NavLink> </li>

    </>
      
    


    return (
        <div className="max-w-screen-xl mx-auto bg-gray-200  ">
         <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      
       { navLinks}

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-gray-600font-bold">𝓔𝓿𝓮𝓷𝓽𝓕𝓾𝓼𝓲𝓸𝓷</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        { navLinks}
    
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  src="https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-avatar-icon-png-image_889567.jpg" />
        </div>
      </label>
   {
    user?
    <button onClick={handleSignOut} className="btn text-white bg-gray-600">Sign Out</button>
    :
    <Link to='/login'>
   <button className="btn btn-primary">Login</button>
    </Link>
   }
  </div>
</div>

   <Marquee pauseOnHover = {true} speed={60} className="pb-3 pt-3">Celebrating life's moments, one event at a time.Where memories are made, laughter is shared, and joy finds its place.</Marquee>
        </div>
    );
};

export default Navber;