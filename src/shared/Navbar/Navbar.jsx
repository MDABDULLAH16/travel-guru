import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const { user, userLogOut } = useContext(AuthContext);
  // if (location.pathname === "/login" || "/register") {
  //   console.log("log or reg", location.pathname);
  // }
  const handleLogOut = () => {
    userLogOut();
  };
  return (
    <div className='flex justify-between  items-center pt-6 mx-12'>
      <Link to='/'>
        <img
          className='h-14 '
          src={location.pathname === "/" ? logo : logo2}
          alt=''
        />
      </Link>

      <div className='font-semibold'>
        <Link className='mr-12'>News</Link>
        <Link className='mr-12'>Blog</Link>
        <Link className='mr-12'>Contact</Link>
        {user ? (
          <>
            {user.email}
            <Link className='mr-12'>
              <button
                onClick={handleLogOut}
                className='btn ml-8 btn-warning px-12 font-semibold text-white'
              >
                SignOut
              </button>
            </Link>
          </>
        ) : (
          <Link className='mr-12' to='/login'>
            <button className='btn btn-warning px-12 font-semibold text-white'>
              {" "}
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
