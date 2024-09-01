import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import HomePage from "./pages/HomePage"
import TodoPage from './pages/TodoPage'
import CountriesPage from './pages/CountriesPage'
import NoPage from './pages/NoPage'
import DetailsPage from './pages/DetailsPage'



function App() {
  return (
    <>
    
    <BrowserRouter>
    
    <Routes>
      
      <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='todo' element={<TodoPage/>}/>
      <Route path='countries' element={<CountriesPage/>}/>
      <Route path='countries/:countryName' element={<DetailsPage/>}/>
     
      
      </Route>
      <Route path='*' element={<NoPage/>} />
    </Routes>
  
    </BrowserRouter>
    
    </>
  )
}

export default App
