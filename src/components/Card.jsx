import React from 'react'
import {useNavigate} from "react-router-dom"


function Card({flag,name}) {

    const navigate = useNavigate();
    function countryDetail(name){
        navigate(`/countries/${name}`)
    }
    
    
  return (
    

        
        <div className='w-40 bg-gray-600 text-center rounded-md text-white font-medium'>
            <img src={flag} className="w-full h-32 object-contain bg-gray-200  rounded-t-md "/>
            <p className='underline'>{name}</p>
            <button className='bg-blue-800 my-2 px-2 rounded-md ' onClick={()=>countryDetail(name)}>More...</button>
        </div>
       
        
        
    
  )
}

export default Card