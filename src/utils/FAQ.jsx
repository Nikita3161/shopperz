import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const FAQ = () => {
  return (
    <div className='h-auto w-screen flex flex-col justify-start items-center gap-20'>
<Navbar/>
<div className='flex flex-col justify-center items-left w-[80vw] h-auto space-y-10 text-justify text-lg'>
    <h1 className='text-4xl font-semibold'>FAQ</h1>
    <div>
    <p>How do I check my order status?</p>
    <p>To check the status of your order, including processing and shipping updates. You can check your order status by logging in to your My Account or by entering your order number, email address, and billing zip code.</p>
  </div>
  <div>
  
   <p>Please note, that once your order has shipped, you will receive an email with a tracking number for all shipping and delivery updates.</p>
   </div>
   <div>
   <p>Can I change or cancel my order once it has been placed?</p>
   <p>Unfortunately, no. Once your order has been placed it is sent to our warehouse for processing. You will need to return the original package to obtain a refund.</p>
   </div>
   <div>
   <p>Visit our Returns & Exchanges page for more information.</p>
   <p className='mt-10'>We are happy to offer free online returns for orders placed on puma.com within 45 days of purchase. You may return your Shopperzz products in their original, unused condition for a full refund.</p>
   </div>
   <div>
    <p>To get started with your return and print your pre-paid shipping label, click here and enter your order number and email address. From there, you will see if you qualify for free returns and find step-by-step instructions to initiate.</p>
   </div>
   <div>
    <p>At this time, we do not offer direct exchanges. To exchange an item, you must return the original item and place a new order. Visit our Returns & Exchanges page for more information and assistance.</p>
   </div>
   <div>
    <p>What is the 30-Day Test Run?</p>
    <p>Try our running shoes for 30 days and if they’re not a good fit, send them back hassle-free.</p>
   </div>
   <div>
    <p>To start your free return and for step-by-step instructions, visit our Returns & Exchanges page</p>
   </div>
   <div>
    <p>What types of payments are accepted?</p>
    <p>We accept payment by debit/credit cards, Apple Pay, PayPal, and Shopperzz Gift Cards. Visit our Payment Options page for more information.</p>
   </div>
   <div>
    <p>How do I use a promotion/coupon code?</p>
    <p>To use your promotion or coupon code, enter the code at checkout in the appropriate field. Make sure you enter the code with the exact spelling and capitalization as shown. You must click "apply" for the discount to be applied. The discounted amount will be displayed on the Shopping Bag and Order Summary pages. If the code is invalid, expired or you have not placed the correct products in the shopping bag, the discount will not be applied.</p>
   </div>
   <div>
   <p>Please refer to our Terms and Conditions for more information.</p>
   </div>
   <div>
    <p>Why Is My Coupon Code Not Working?</p>
    <p>Our offer codes exclude but are not limited to new product releases, select Classic styles, select Teamsport styles, Golf, Basketball, select RS Products, clearance merchandise, and new licensed and replica jerseys. Offers cannot be combined with any other shipping promotion, offer, or coupon. Offers cannot be applied to past purchases, redeemed for cash equivalent, used to purchase gift cards, or used as payment on an account.</p>
   </div>
   
   
    </div>
    <Footer/>
    </div>
  )
}

export default FAQ   