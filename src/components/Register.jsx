import { useState } from 'react';
import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitt(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { username, email, password })
      .then(resu => {
        console.log(resu);
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>Register</h1>
          <form className='flex flex-col space-y-4' onSubmit={submitt}>
            <label className='text-lg font-medium text-gray-700'>Enter your username</label>
            <input
              type="text"
              value={username}
              className='w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300'
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter username...'
            />
            <label className='text-lg font-medium text-gray-700'>Enter your Email</label>
            <input
              type="email"
              value={email}
              className='w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email...'
            />
            <label className='text-lg font-medium text-gray-700'>Enter your password</label>
            <input
              type="password"
              value={password}
              className='w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password...'
            />
            <button
              type="submit"
              className='w-full bg-blue-600 text-white font-semibold text-lg py-3 rounded-lg hover:bg-blue-700 transition duration-300'
            >
              Submit
            </button>
          </form>
          <div className='text-center mt-4'>
            <a href="/login" className='text-blue-600 underline hover:text-blue-800'>
              Already have an account? Log in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
