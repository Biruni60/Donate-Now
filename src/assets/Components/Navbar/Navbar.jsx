import {  NavLink } from "react-router-dom";
import './Navbar.css'



const Navbar = () => {
    const links=<>
        <li><NavLink className='text-lg'  to={"/"}>Home</NavLink></li>
        <li><NavLink className='text-lg'  to={"/donation"}>Donation</NavLink></li>
        <li><NavLink className='text-lg'   to={"/statistics"}>Statistics</NavLink></li>
      
    </>
    return (
        <nav>
        <div className="navbar bg-base-100">
  <div className="navbar">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
        {links}
      </ul>
    </div>
    <img src="/src/assets/Components/image/Logo.png" alt="" />
  </div>
  <div className="navbar hidden lg:flex">
    <ul className="flex gap-28">
      {links}
    </ul>
  </div>
 
</div>
        </nav>
    );
};

export default Navbar;