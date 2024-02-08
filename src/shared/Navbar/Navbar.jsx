import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-center items-center bg-indigo-600'>
      <Link className='ml-2' to='/'>
        Home
      </Link>
      <Link className='ml-2' to='/login'>
        Login
      </Link>
      <Link className='ml-2' to='/register'>
        Register
      </Link>
    </div>
  );
};

export default Navbar;
