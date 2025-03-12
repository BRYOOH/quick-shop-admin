import React from 'react'
import { Link } from 'react-router-dom'
import addpro from '../assets/addpro.png'
import listpro from '../assets/listpro.png'


const SideBar = () => {
  return (
    <div className='h-[110vh] w-[50vh] flex bg-white p-4 '>
        <div className='flex items-center flex-col gap-14 mt-10'>
            <Link to={"/addproduct"}>
            <div className='flex items-center gap-2'>
                <img src={addpro} alt="" className='h-20' />
                <p className='text-2xl font-medium text-teal-500'>Add Product</p>
            </div>
            </Link>
            <Link to={"/allproducts"}>
            <div className='flex items-center gap-2'>
                <img src={listpro} alt="" className='h-20' />
                <p className='text-2xl font-medium text-teal-500'>List Products</p>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default SideBar