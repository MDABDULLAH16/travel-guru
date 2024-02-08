import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='flex justify-between  items-center pt-10 mx-12'>
      <Link to='/'>
        <img
          className='h-14 '
          src={location.pathname === "/login" ? logo2 : logo}
          alt=''
        />
      </Link>

      <div className='font-semibold'>
        <Link className='mr-12'>News</Link>
        <Link className='mr-12'>Blog</Link>
        <Link className='mr-12'>Contact</Link>
        <Link className='mr-12' to='/login'>
          <button className='btn btn-warning px-12 font-semibold text-white'>
            {" "}
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
