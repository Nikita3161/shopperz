import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const ReturnAndExchange = () => {
  return (
    <div className='h-auto w-screen flex flex-col justify-start items-center gap-20'>
<Navbar/>
<div className='h-auto w-[80vw] flex flex-col justify-start items-left space-y-10 text-justify text-lg'>
<h1 className='text-4xl font-semibold'>Return & Exchange</h1>
<div>
    <p>Free Online Returns</p>
    <p>To make your holiday shopping easier, we're extending our return window. Orders placed on puma.com between November 1st, 2023, and December 25th, 2023 may be returned in their original, unused condition as late as February 8th, 2024. Orders placed after December 25th, 2023 will follow our normal return timeframe of 45 days after purchase.</p>
</div>
<div>
    <p>Initiating Your Return</p>
    <p>Looking to make a return online? You’re in the right place. Click here to be redirected to our returns portal to initiate a return online.</p>
</div>
<div>
    <p>Refunds</p>
    <p>Purchases made by debit or credit card and through PayPal will be credited back to the original form of payment. If you paid with a Shopperzz Gift Card, you will be issued a separate E-Gift Card for the refunded amount.</p>
</div>
<div>
    <p>Returns that have been initiated on us.puma.com can take 1-2 weeks to process depending on when the return is received. Please make sure you select the right item(s) you wish to return to avoid delays in refunding.</p>
</div>
<div>
    <p>Return Exceptions</p>
    <p>Shopperzz does not accept returns on gift cards, customized products, and bodywear including face masks. Custom products are nonrefundable, except in the case of manufacturing or material defects in which case you may contact Customer Service via phone or email for assistance.</p>
</div>
<div>
    <p>Returns to Shopperzz Retail Stores</p>
    <p>You may return items purchased on puma.com to any Shopperzz store. Please bring the original form of payment and a physical or digital copy of the Order Confirmation Email with you so you may be refunded. Purchases made by credit card will be credited back to that original card (including pre-paid gift cards). If you paid with a Shopperzz Gift Card, Apple Pay, Google Pay, or PayPal, then a Shopperzz Gift Card will be issued with the refunded amount.</p>
</div>
<div>
    <p>Exchanges</p>
    <p>We do not offer direct exchanges at this time. If you wish to exchange an item, you must go through our return process and place a new order.</p>
</div>
<div>
    <p>We will provide you with a pre-paid shipping label for your return and your new order will come with free standard shipping.</p>
</div>
</div>
<Footer/>
    </div>
  )
}

export default ReturnAndExchange