import React, { useContext } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirm = form.get("confirm");
    if (password !== confirm) {
      alert("Do not match password");
      return;
    }
    console.log(name, email, password, confirm);
    createUser(email, password).then((result) => {
      const createUser = result.user;
      console.log(createUser);
      updateProfile(createUser, {
        displayName: name,
      });
      sendEmailVerification(createUser)
        .then(alert("cheek your email Please!!"))
        .catch((error) => {
          console.log(error.message);
        });
    });
    e.currentTarget.reset();
  };

  return (
    <div className='bg-gray-100  min-h-screen '>
      <Navbar></Navbar>
      <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
          <h2 className='text-3xl font-bold text-center mb-6'>Register</h2>
          <form onSubmit={handleRegister} className='space-y-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-gray-700 text-sm font-semibold mb-2'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
                placeholder='Enter your name'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-semibold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
                placeholder='Enter your email'
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
            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-gray-700 text-sm font-semibold mb-2'
              >
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirm'
                className='w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500'
                placeholder='Confirm your password'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'
            >
              Register
            </button>
            <p>
              Have a Account Already?
              <Link to='/login' className='text-blue-500 font-bold'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
