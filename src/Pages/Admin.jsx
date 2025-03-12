import React from 'react'
import AddProduct from '../Components/AddProduct'
import ShowProducts from '../Components/ShowProducts'
import SideBar from '../Components/SideBar'
import { Route, Routes } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='flex h-full  p-4 gap-4'>
    <SideBar/>
     <Routes>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/allproducts" element={<ShowProducts/>}/>
     </Routes>
    </div>
  )
}

export default Admin