import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Pages/Home'
import Laptop from '../Pages/Laptop'
import Shoes from '../Pages/Shoes'
import SingleProduct from '../ShoesPage/SingleProduct'
const AllRoutes = () => {
  
   return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/shoes' element={<Shoes/>} />
     <Route path='/laptop' element={<Laptop/>} />
     <Route path='/shoes/:userid' element={<SingleProduct/>} />
    </Routes>
  )
}

export default AllRoutes