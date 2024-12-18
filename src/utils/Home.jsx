import React from 'react'
import Navbar from './Navbar'
import Sale from './Sale'
import Collections from './Collections'
import Popular from './Popular'
import FlashSale from './FlashSale'
import Brands from './Brands'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='h-auto w-screen flex flex-col justify-center items-center gap-10'>
<Navbar/>
<Sale/>
<Collections/>
<Popular/>
<FlashSale/>
<Brands/>
<Footer/>
    </div>
  )
}

export default Home