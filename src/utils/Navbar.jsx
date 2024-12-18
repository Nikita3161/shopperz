import React from 'react';
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";


const Navbar = () => {
         return (
    <div className='h-[50px] w-screen flex justify-center items-center bg-slate-50 gap-16 shadow-lg sticky top-0 z-10 '>
<div>
    <img src={require("../assets/logo.png")}alt='name' className='h-20 w-28 object-contain'/> 
</div>
<div className='space-x-10'>
    <a href='/'className='text-orange-400 text-lg font-semibold'>Home</a>
    <a 
    
    href='/'className='text-lg font-semibold '>Categories <span className='text-xl mt-5 text-center'>&#129171;</span></a>
    <a href='/'className=' text-lg font-semibold'>Offers</a>

</div>
<div>
    <input type="text"className='h-10 w-[250px] rounded-full border-[1.5px] bg-slate-100 px-5 text-gray-500 border-orange-400 outline-none'placeholder='Search' />
</div>
<div className='flex justify-around items-center space-x-3 '>
    <select className='outline-none'>
  <option><button type='button'className=' flex justify-center items-center'>English</button></option>
  <option><button type='button'className=' flex justify-center items-center'>Bangala</button></option>
  <option><button type='button'className=' flex justify-center items-center'>Arabic</button></option>
  
  </select>
   
</div>
<div className='flex space-x-10 justify-center items-center'>
    <FaRegHeart className='text-xl text-gray-500'/>
    <FaRegUser className='text-xl text-gray-500'/>
    <div className=' bg-black h-10 w-10 flex justify-center items-center rounded-full text-white'>
    <IoLockClosedOutline className='text-2xl font-bold'/>
    </div>
</div>

    </div>
  )
}

export default Navbar