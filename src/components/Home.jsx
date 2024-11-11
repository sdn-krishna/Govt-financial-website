import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Vortex } from './Vortex';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='text-white w-screen h-screen overflow-hidden bg-black'>
            <Navbar />
            <Vortex backgroundColor="black" className="flex items-center flex-col justify-center px-4 md:px-10 py-4 w-screen h-screen">
                <div className='absolute text-center space-y-8'>
                    <h1 className='text-6xl md:text-8xl font-extrabold animate-fadeIn'>Welcome</h1>
                    <p className='text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 animate-fadeIn delay-200'>
                        Discover a transparent view of government financial operations with Fiscal View, your one-stop hub for accurate and up-to-date information on public finances. This platform provides citizens and policymakers with easy access to critical data, including annual budgets, detailed expenditure reports, financial records, and tax revenue statistics.
                    </p>
                    <div className='flex justify-center space-x-6 mt-10 animate-fadeIn delay-400'>
                        <button 
                            className='border-4 border-white py-3 px-8 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300' 
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                        <button 
                            className='border-4 border-white py-3 px-8 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300' 
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </Vortex>
        </div>
    );
}

export default Home;
