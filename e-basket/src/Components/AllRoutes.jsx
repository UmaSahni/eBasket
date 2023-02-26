import React from 'react'
import {Routes, Route} from "react-router-dom"
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Laptop from '../Pages/Laptop'
import Shoes from '../Pages/Shoes'
import SingleProduct from '../ShoesPage/SingleProduct'
import Payment from './Payment'
const AllRoutes = () => {
  
   return (
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/shoes' element={<Shoes/>} />
     <Route path='/laptop' element={<Laptop/>} />
     <Route path='/shoes/:userid' element={<SingleProduct/>} />
     <Route path='/cart' element={<Cart/>} />
     <Route path='/payment' element={<Payment/>} />
    </Routes>
  )
}

export default AllRoutes