import React from 'react'
import { PiJarLabel } from "react-icons/pi";
import Navbar from './Navbar';
import { IoLocationOutline,IoMailUnreadOutline } from "react-icons/io5";
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div className='h-auto w-screen flex flex-col justify-start items-center gap-10'>
<Navbar/>
<div className='h-auto w-[80vw] flex flex-col justify-start items-left space-y-10 text-justify text-lg'>
<h1 className='text-4xl font-semibold'>Contact Us</h1>
<div>
    <p>Questions, Concerns, Comments? You talk, we listen.</p>
    <p>If you have any additional questions or comments, we would love to hear from you!

Submit your query using any of the methods below.</p>
</div>
<div>
    <p>Email: info@inilabs.net</p>
    <p>Toll-free number: +88013333846282, 7 days a week</p>
</div>
<div className='flex justify-start items-center gap-56'>
  <div className='flex flex-col justify-center items-left h-auto w-auto space-y-4'>
<div className='flex space-x-4'>
<PiJarLabel className='text-4xl text-white rounded-full bg-yellow-500 p-2'/>
<p className='text-md font-semibold'>Mirapur 1</p>
</div>
<div className='flex space-x-4 justify-center items-center'>
<IoLocationOutline className='text-lg text-center  '/>
<p className='text-md'>House :31, Road: 9, Block: A, <br/>Mirpur 1
Dhaka,Dhaka,1216</p>
</div>
<p className='text-left'>+8801325736364</p>
  </div>
  {/* 2nd */}
  <div className='flex flex-col justify-center items-left h-auto w-auto space-y-4'>
<div className='flex space-x-4'>
<PiJarLabel className='text-4xl text-white rounded-full bg-yellow-500 p-2'/>
<p className='text-md font-semibold'>Dhanmandi 27</p>
</div>
<div className='flex space-x-4 justify-center items-center'>
<IoLocationOutline className='text-lg text-center  '/>
<p className='text-md'>House :20, Road: 19, Block: B, <br/>Dhanmondi 32
Dhaka,Dhaka,1209</p>
</div>
<p className='text-left'>+8801275362435</p>
  </div>
</div>
<div className='flex flex-col justify-start items-left w-[200px] h-auto space-y-5'>
<h1 className='text-2xl font-semibold'>Support</h1>
<div className='flex space-x-4 justify-center items-center'>
  <IoMailUnreadOutline className='text-lg text-center'/>
  <p>
  info@inilabs.net</p>
</div>
<p className='text-left'>+88013333846282</p>
</div>
</div>
<Footer/>
    </div>
  )
}

export default ContactUs