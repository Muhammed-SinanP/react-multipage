import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ShowTask({index, item, deleteTask}) {
    const [status,setStatus] = useState(false)
    function checked(){
     setStatus(!status);
    }
  return (
    <div className='w-96 bg-blue-300 mt-2 flex flex-row justify-between px-2 py-1'>
        <input type="checkbox" id={`task${index}`} name={`task${index}`} onClick={checked}/>
        <label for={`task${index}`} className={`text-2xl ${status?"line-through":"no-underline"}`}>{item}</label>
        
        <button onClick={()=>{deleteTask(index)}}><DeleteForeverIcon/></button>
    </div>
  )
}

export default ShowTask