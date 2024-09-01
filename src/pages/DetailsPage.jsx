import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailsPage() {
    const { countryName } = useParams(); 
    const [detail, setDetail] = useState(null);  // Initialize as null
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null);    // Error state

    useEffect(() => {
        setLoading(true);  // Set loading to true before making the request
        setError(null);    // Reset error before making the request

        axios(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(response => {
                if (response.data) {
                  const result = response.data[0]
                    const countryDetails = {
                        name:result.name.common,
                        population: result.population,
                        capital: result.capital,
                        continent: result.continents[0],
                        flag: result.flags.png,
                        
                    };
                    
                    
                  
                    setDetail(countryDetails);
                    
                } else {
                    setError('No data found for the specified country');
                }
            })
            .catch(error => {
                setError('Failed to fetch country details');
                console.error("Error fetching country details:", error);
            })
            .finally(() => {
                setLoading(false);  // Set loading to false after request completes
            });

    }, [countryName]);

   

    return (

       
     
       <div className='flex flex-row justify-center items-center my-4'>
         {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!detail && <div>No data found yet.Please wait or try other</div>}
      {!loading && !error && detail &&  
      <div className='border-2 w-80  border-black'>
        <img className='w-full' src={detail.flag}/>
        <h1 className='ml-4 my-1'><strong>Name:</strong> {detail.name}</h1>
        <h2 className='ml-4 my-1'><strong>Capital:</strong> {detail.capital ? detail.capital : "not found"}</h2>
        <h3 className='ml-4 my-1'><strong>Continent:</strong> {detail.continent}</h3>
        <h4 className='ml-4 my-1'><strong>Population:</strong> {detail.population}</h4>
         </div>}
       </div>
       
    );
}

export default DetailsPage;
