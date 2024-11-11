import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gfr = () => {
    const [totalFinance, setTotalFinance] = useState(0);
    const [schemes, setSchemes] = useState([]);
    const [selectedScheme, setSelectedScheme] = useState("");
    const [financeDetails, setFinanceDetails] = useState([]);

    useEffect(() => {
        // Fetch total finance record
        axios.get("http://localhost:3001/finance/total")
            .then(response => {
                setTotalFinance(response.data);
            })
            .catch(error => console.error("Error fetching total finance:", error));
        
        // Fetch all finance data to get unique schemes
        axios.get("http://localhost:3001/finance")
            .then(response => {
                const uniqueSchemes = Array.from(new Set(response.data.map(item => item["Scheme"])));
                setSchemes(uniqueSchemes);
            })
            .catch(error => console.error("Error fetching schemes:", error));
    }, []);

    const handleSchemeChange = (event) => {
        const scheme = event.target.value;
        setSelectedScheme(scheme);
        
        // Filter finance details for the selected scheme
        axios.get(`http://localhost:3001/finance`)
            .then(response => {
                const filteredDetails = response.data.filter(
                    item => item["Scheme"] === scheme
                );
                setFinanceDetails(filteredDetails);
            })
            .catch(error => console.error("Error fetching finance details:", error));
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-10'>
            <div className='bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl'>
                <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>Government Finance Records</h1>
                <p className='text-center text-lg text-gray-600 mb-8'>An overview of the financial records and budget allocations. Select a scheme to view detailed financial information.</p>
                
                <div className='border-t border-gray-300 mb-6'></div>
                
                <p className='text-2xl font-semibold text-gray-700 mb-2'>Total Finance Record: <span className="text-blue-600">{totalFinance}</span></p>
                
                <div className='my-6'>
                    <label className='text-lg font-medium text-gray-700'>Select Scheme:</label>
                    <select
                        value={selectedScheme}
                        onChange={handleSchemeChange}
                        className='block w-full p-2 mt-2 border rounded-lg border-gray-300 text-gray-700 bg-gray-100 focus:border-blue-400 focus:bg-white focus:outline-none transition duration-300'
                    >
                        <option value="">-- Select Scheme --</option>
                        {schemes.map((scheme, index) => (
                            <option key={index} value={scheme}>{scheme}</option>
                        ))}
                    </select>
                </div>

                <div className='border-t border-gray-300 my-6'></div>

                <div>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Finance Record Details</h2>
                    {financeDetails.length === 0 ? (
                        <p className='text-gray-600'>Select a scheme to see details</p>
                    ) : (
                        <ul className='space-y-4'>
                            {financeDetails.map((detail, index) => (
                                <li key={index} className='p-4 bg-gray-100 rounded-lg shadow-md'>
                                    <p><strong>Group:</strong> {detail.Group}</p>
                                    <p><strong>Scheme:</strong> {detail["Scheme"]}</p>
                                    <p><strong>Actuals 2020-2021:</strong> {detail["Actuals 2020-2021"]}</p>
                                    <p><strong>Budget 2021-2022:</strong> {detail["Budget 2021-2022"]}</p>
                                    <p><strong>Revised 2021-2022:</strong> {detail["Revised 2021-2022"]}</p>
                                    <p><strong>Budget 2022-2023:</strong> {detail["Budget 2022-2023"]}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gfr;
