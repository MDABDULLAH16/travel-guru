import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className='flex justify-between text-white items-center pt-10 mx-12'>
      <img className='h-14 ' src={logo} alt='' />

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
