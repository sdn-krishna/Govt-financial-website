import React from 'react'
import NavforD from './NavforD'
import { Vortex } from './Vortex'

const Dashboard = () => {
  return (
    <div className='h-screen w-screen overflow-hidden text-white'>
      <NavforD />
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-4 md:px-10 py-4 w-screen h-screen"
      >
        <div className='flex items-center justify-center h-full'>
          <div className='flex flex-col items-center space-y-10 text-center'>
              <h1 className='text-5xl md:text-7xl font-bold shadow-lg p-4'>Select Your Preferences</h1>
              <p className='text-lg md:text-2xl max-w-2xl text-gray-300'>Choose the financial data you would like to explore. Get insights on government financial reports, budgets, expenditures, and tax data with ease.</p>
              <div className='space-x-5 text-2xl md:text-3xl flex flex-wrap justify-center'>
                  <button className='border-4 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300'> <a href="/gfr">GFR</a> </button>
                  <button className='border-4 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300'> <a href="/budget">Budgets</a> </button>
                  <button className='border-4 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300'> <a href="/expenditure">Expenditure</a> </button>
                  <button className='border-4 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300'> <a href="/tax">Tax Data</a> </button>
              </div>
          </div>
        </div>
      </Vortex>
    </div>
  )
}

export default Dashboard
