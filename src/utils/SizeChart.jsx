import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const SizeChart = () => {
  return (
    <div className='h-auto w-screen flex flex-col justify-start items-center gap-10'>
<Navbar/>
<div className='h-auto w-[80vw] flex flex-col justify-start items-left gap-20'>
    <h1 className='text-4xl font-semibold'>Size Charts</h1>
    <h1 className='text-5xl text-blue-600 font-bold'>For Jeans:</h1>
    <div className='h-auto w-[80vw] flex justify-center items-center gap-5'>
<div className='h-[450px] w-[450px] flex justify-center items-center border-2 border-gray-200 p-5'>
<img src={require("../assets/jeans.png")}alt='name'className='object-contain h-[450px] w-[450px]'/>
</div>
<div className='h-[500px] w-[700px] flex justify-center items-center'>
<img src={require("../assets/size.png")}alt='name'className=' h-[420px] w-[700px]'/>
</div>
    </div>
    <h1 className='text-5xl text-blue-600 font-bold'>For Joggers:</h1>
    <div className='h-auto w-[80vw] flex justify-center items-center gap-5'>
<div className='h-[450px] w-[450px] flex justify-center items-center border-2 border-gray-200 p-5 '>
<img src={require("../assets/jeans.png")}alt='name'className='object-contain h-[450px] w-[450px]'/>
</div>
<div className='h-[500px] w-[700px] flex justify-center items-center'>
<img src={require("../assets/joggers size.png")}alt='name'className=' h-[420px] w-[700px]'/>
</div>
    </div>
    <h1 className='text-5xl text-blue-600 font-bold'>For Polo-Shirt:</h1>
    <div className='h-auto w-[80vw] flex justify-center items-center gap-5'>
<div className='h-[450px] w-[450px] flex justify-center items-center border-2 border-gray-200 p-5 '>
<img src={require("../assets/polo shirts.png")}alt='name'className='object-contain h-[450px] w-[450px]'/>
</div>
<div className='h-[500px] w-[700px] flex justify-start items-start'>
<img src={require("../assets/shirt size.png")}alt='name'className=' h-[200px] w-[700px] object-contain'/>
</div>
    </div>
    <h1 className='text-5xl text-blue-600 font-bold'>For T-Shirt:</h1>
    <div className='h-auto w-[80vw] flex justify-center items-center'>
<img src={require("../assets/tshirtsize.png")}alt='name' className='h-[400px] w-[70vw] object-contain'/>
    </div>
    <p className='text-lg font-semibold'>Note: please check it before you purchase any product.</p>
</div>


<Footer/>
    </div>
  )
}

export default SizeChart