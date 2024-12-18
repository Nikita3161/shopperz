import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Shipping = () => {
  return (
    <div className='h-auto w-screen flex flex-col justify-start items-center gap-20'>
<Navbar/>
<div className='h-auto w-[80vw] flex flex-col justify-start items-left space-y-10 text-justify text-lg'>
<h1 className='text-4xl font-semibold'>Shipping</h1>
<div>
    
    <p>During checkout, we'll provide an estimated delivery date based on the delivery service and delivery address. We offer the following delivery options:</p>
</div>
<div>
    <p>Standard Delivery (2–4 business days)</p>
    <p>£4.50 for guest orders, free for orders more than £99</p>
</div>
<div>
    <p>Customized Products</p>
    <p>Customized shirts (2–5 business days)</p>
    <p>Shopperzz By You shoes (2–5 weeks)</p>
</div>
<div>
    <p>Additional Information</p>
    <p>Gift cards are sent via standard delivery.</p>
    <p>Please note, that standard delivery may take longer for remote locations.</p>
    <p>Shopperzz does not deliver to all areas. The following postcodes are ineligible for delivery: Falkland Islands (FIQQ 1ZZ), Channel Islands (GY1–GY9, JE1–JE 4), and Gibraltar (GX11 1AA).</p>
</div>
<div>
    <p>Store Pick-up</p>
    <p>Free for all eligible orders. Just tap or click "PICK UP" during checkout to see if the items in your bag are eligible for pick-up at a Shopperzz store near you.</p>
</div>



</div>
<Footer/>
    </div>
  )
}

export default Shipping