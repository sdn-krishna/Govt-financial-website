import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Expenditure = () => {
    const [totalExpenditure, setTotalExpenditure] = useState(null);
    const [ministries, setMinistries] = useState([]);
    const [selectedMinistry, setSelectedMinistry] = useState("");
    const [expenditureDetails, setExpenditureDetails] = useState([]);

    useEffect(() => {
        // Fetch total expenditure
        axios.get("http://localhost:3001/expenditure/total")
            .then(response => {
                setTotalExpenditure(response.data);
            })
            .catch(error => console.error("Error fetching total expenditure:", error));

        // Fetch all expenditure data for ministries
        axios.get("http://localhost:3001/expenditure")
            .then(response => {
                const uniqueMinistries = Array.from(new Set(response.data.map(item => item["Ministry/Department"])));
                setMinistries(uniqueMinistries);
            })
            .catch(error => console.error("Error fetching ministries:", error));
    }, []);

    const handleMinistryChange = (event) => {
        const ministry = event.target.value;
        setSelectedMinistry(ministry);

        // Filter expenditure details for the selected ministry
        axios.get("http://localhost:3001/expenditure")
            .then(response => {
                const filteredDetails = response.data.filter(
                    item => item["Ministry/Department"] === ministry
                );
                setExpenditureDetails(filteredDetails);
            })
            .catch(error => console.error("Error fetching expenditure details:", error));
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-10'>
            <div className='bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl'>
                <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>Indian Union Expenditure</h1>
                <p className='text-center text-lg text-gray-600 mb-8'>Explore the expenditure records of various ministries and departments of the Indian government. Select a ministry to view detailed expenditure data.</p>
                
                <div className='border-t border-gray-300 mb-6'></div>
                
                {/* <p className='text-2xl font-semibold text-gray-700 mb-2'>Total Expenditure: <span className="text-blue-600">{totalExpenditure}</span></p> */}
                
                <div className='my-6'>
                    <label className='text-lg font-medium text-gray-700'>Select Ministry:</label>
                    <select
                        value={selectedMinistry}
                        onChange={handleMinistryChange}
                        className='block w-full p-2 mt-2 border rounded-lg border-gray-300 text-gray-700 bg-gray-100 focus:border-blue-400 focus:bg-white focus:outline-none transition duration-300'
                    >
                        <option value="">-- Select Ministry --</option>
                        {ministries.map((ministry, index) => (
                            <option key={index} value={ministry}>{ministry}</option>
                        ))}
                    </select>
                </div>

                <div className='border-t border-gray-300 my-6'></div>

                <div>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Expenditure Details</h2>
                    {expenditureDetails.length === 0 ? (
                        <p className='text-gray-600'>Select a ministry to see details</p>
                    ) : (
                        <ul className='space-y-4'>
                            {expenditureDetails.map((detail, index) => (
                                <li key={index} className='p-4 bg-gray-100 rounded-lg shadow-md'>
                                    <p><strong>Scheme:</strong> {detail.Scheme}</p>
                                    <p><strong>Expenditure 2021-2022:</strong> {detail["Revised Estimates2020-2021 - Total"]}</p>
                                    <p><strong>Expenditure 2022-2023:</strong> {detail["Budget Estimates2021-2022 - Total"]}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Expenditure;
