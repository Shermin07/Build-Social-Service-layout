import { NavLink } from "react-router-dom"


const Navber = () => {


    const navLinks = <>


        <li className="ml-3 text-lg"> <NavLink to='/' className='text-blue-700 font-semibold '> Home </NavLink></li>
    
        <li className="ml-3 text-lg"> <NavLink to='/login' className='text-blue-700 font-semibold'> Login </NavLink> </li>
        <li className="ml-3 text-lg"> <NavLink to='/register' className='text-blue-700 font-semibold'> Register </NavLink> </li>

    </>
      
    


    return (
        <div>
         <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      
       { navLinks}

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-blue-700 font-bold">Events Managements</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        { navLinks}
    
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
        </div>
    );
};

export default Navber;