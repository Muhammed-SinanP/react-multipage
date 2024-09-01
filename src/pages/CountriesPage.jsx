import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from '../components/Card'

function CountriesPage() {
  const [countries,setCountries] = useState([])

  useEffect(()=>{
    axios("https://restcountries.com/v3.1/all").then(response =>{
        const countryData = response.data.map((country) => ({
            name: country.name.common,
            flag: country.flags.png,
            id: country.cca2

        }))
        setCountries(countryData);
        
    }       
    )
    .catch((error)=>{
        console.log(error)
    })

},[])


  return (
    <div className='flex flex-wrap flex-row gap-4 justify-center mt-10 p-4'>
    {countries.map((country) =>(

      <Card key={country.id} flag={country.flag} name={country.name} />
    )
    )}
    
    </div>
  )
}

export default CountriesPage