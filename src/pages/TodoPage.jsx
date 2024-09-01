import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ShowTask from '../components/ShowTask';

function TodoPage() {
  const [task,setTask] = useState("");
  const [taskList,setTaskList] = useState([])
  
  function updateInput(event){
   setTask(event.target.value);
  }
  
  function addTask(event){
    event.preventDefault();
    if(task!==""){
      setTaskList((prevTasks)=>[...prevTasks,task])
      setTask("")
    }
   
  }
  function deleteTask(id){
    setTaskList(taskList.filter((item,index)=> index != id))

  }

  return (
    <div className=' flex flex-col justify-start items-center my-10'>
      <div className='w-96  flex justify-between '>
        <input type='text' className='bg-gray-200 rounded-md w-80 p-2' onChange={updateInput} value={task}/>
        <button className=' bg-green-400 px-2 rounded-md border-2 text-white border-black' onClick={addTask}>
       <AddIcon/>

        </button>
      </div>
      
      {taskList.map((item,index)=> <ShowTask key={index} index={index} item={item} deleteTask={deleteTask}/>)}
    </div>
  )
}

export default TodoPage