import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-black text-white font-semibold text-xl shadow-md py-4'>
      <div className='container mx-auto flex justify-between items-center px-6'>
        <a href="/" className='text-3xl font-bold tracking-wide hover:text-gray-300 transition duration-300'>
          Fiscal View
        </a>
        <div className='flex space-x-8'>
          <a href="/login" className='hover:text-gray-300 transition duration-300'>Login</a>
          <a href="/register" className='hover:text-gray-300 transition duration-300'>Register</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
