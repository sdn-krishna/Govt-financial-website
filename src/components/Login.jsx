import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  function submitt(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { username, password })
      .then(result => {
        console.log(result);
        if (result.data === 'approve') navigate('/dashboard');
        else if (result.data === 'wrong creds') alert("Wrong credentials.");
        else alert("User does not exist.");
      });
  }
  
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='flex flex-col max-w-md w-full bg-white p-8 rounded-lg shadow-lg'>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>Login</h1>
          <form className='flex flex-col space-y-4' onSubmit={submitt}>
            <label className='text-lg font-medium text-gray-700'>Enter your username</label>
            <input
              type="text"
              value={username}
              className='w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300'
              placeholder='Enter username...'
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className='text-lg font-medium text-gray-700'>Enter your password</label>
            <input
              type="password"
              value={password}
              className='w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-300'
              placeholder='Enter password...'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className='w-full bg-blue-600 text-white font-semibold text-lg py-3 rounded-lg hover:bg-blue-700 transition duration-300'
            >
              Submit
            </button>
          </form>
          <div className='text-center mt-4'>
            <a href="/register" className='text-blue-600 underline hover:text-blue-800'>
              Don't have an account? Create one
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
