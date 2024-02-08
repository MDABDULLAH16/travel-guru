import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
const Login = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar></Navbar>
      <div className='flex justify-center items-center min-h-screen  '>
        <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
          <h2 className='text-3xl text-black font-bold text-center mb-6'>
            Login
          </h2>
          <form className='space-y-4'>
            <div>
              <label
                htmlFor='username'
                className='block text-gray-700 text-sm font-semibold mb-2'
              >
                Username
              </label>
              <input
                type='text'
                id='username'
                name='username'
                className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
                placeholder='Enter your username'
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
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
