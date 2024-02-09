import React, { useContext, useRef } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { userLogin, resetPassword } = useContext(AuthContext);
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // Clear input fields after successful login
        // alert("User login done");
        // This will reset the form and clear all input fields
      })
      .catch((error) => {
        console.log(error.message);
      });
    e.currentTarget.reset();
  };
  const handleResetEmail = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        alert("check Your Email for reset password!!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className='bg-gray-100  min-h-screen '>
      <Navbar></Navbar>
      <div className='flex justify-center items-center mt-12'>
        <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
          <h2 className='text-3xl text-black font-bold text-center mb-6'>
            Login
          </h2>
          <form onSubmit={handleLogin} className='space-y-4'>
            <div>
              <label
                htmlFor='username'
                className='block text-gray-700 text-sm font-semibold mb-2'
              >
                Email
              </label>
              <input
                ref={emailRef}
                type='email'
                id='username'
                name='email'
                className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
                placeholder='Enter your Email'
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-gray-700 text-sm font-semibold mb-2'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
                placeholder='Enter your password'
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-2  '>
                <input type='checkbox' name='checked' id='checkbox' />
                <label htmlFor='checkbox'>Remember me</label>
              </div>
              <Link
                onClick={handleResetEmail}
                className='underline text-yellow-600'
              >
                Forger Password?
              </Link>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'
            >
              Log In
            </button>
            <p>
              Are You New On Travel Guru?{" "}
              <Link to='/register' className='text-blue-500 font-bold'>
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
