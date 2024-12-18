import React from 'react'
import { FaRegHeart, FaRegStar } from "react-icons/fa";

const FlashSale = () => {
    const collectionItems = [
        {
          id: 1,
          title: "Unisex Bucket Hat",
          image: "https://demo.shopperz.codezenbd.com/storage/274/conversions/1-cover.png",
          price: 80.00,
          Accurate: 100.00,
        },
        {
          id: 2,
          title: "Team Red Hoodie",
          image: "https://demo.shopperz.codezenbd.com/storage/96/conversions/1-cover.png",
          price: 60.00,
          Accurate: 120.00,
        },
        {
          id: 3,
          title: "Graphic Print Tee",
          image: "https://demo.shopperz.codezenbd.com/storage/534/conversions/1-cover.png",
          price: 60.00 ,
          Accurate: 120.00,
          
        },
        {
          id: 4,
          title: "Utility Boonie Hat",
          image: "https://demo.shopperz.codezenbd.com/storage/469/conversions/1-cover.png",
          price: 40.00,
          Accurate: 80.00,
        },
        {
          id: 5,
          title: "Utility Power Bag",
          image: "https://demo.shopperz.codezenbd.com/storage/254/conversions/1-cover.png",
          price: 135.00,
          Accurate: 270.00,
        },
        {
          id: 6,
          title: "Nike Brasilia",
          image: "https://demo.shopperz.codezenbd.com/storage/604/conversions/1-cover.png",
          price: 70.00,
          Accurate: 140.00,
        },
        {
          id: 7,
          title: "Nike Low Sneaker",
          image: "https://demo.shopperz.codezenbd.com/storage/229/conversions/1-cover.png",
          price: 110.00,
          Accurate: 220.00,
        },
        {
          id: 8,
          title: "Heritage 89",
          image: "https://demo.shopperz.codezenbd.com/storage/614/conversions/1-cover.png",
          price: 64.00,
          Accurate: 80.00,
        },
      ];
  return (
    <div className='h-auto w-[80vw] flex flex-col justify-center items-left gap-8'>
      <h1 className='text-4xl font-semibold '>Flash Sale</h1>

      {/* Cards Container */}
      <div className='h-auto w-[80vw] justify-start items-center gap-8 grid grid-cols-4'>
        {collectionItems.map((item) => (
          <div
            key={item.id}
            className='h-[400px] w-[300px] flex flex-col justify-center items-left relative hover:shadow-lg p-4 bg-slate-50 rounded-lg'>
            <div 
              className='h-[300px] w-full bg-cover bg-center rounded-lg transition-transform hover:duration-500 hover:bg-[length:110%] hover:scale-105 ' 
              style={{ backgroundImage: `url(${item.image})`, transform: "rotate(0deg)" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(3deg) scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg) scale(1)"}
            ></div>

            {/* Heart Icon */}
            <div className='h-7 w-7 flex justify-center items-center absolute bg-white rounded-full z-10 top-4 right-5'>
              <FaRegHeart className='text-lg text-gray-500 hover:text-orange-400' />
            </div>
            <div className='h-7 w-20 flex justify-center items-center absolute bg-gray-800  rounded-full z-10 top-8 left-4'>
             <p className='text-white text-sm font-semibold'>Flash Sale</p>
            </div>
            {/* Card Details */}
            <p className='text-lg font-semibold mt-4 hover:text-red-400 transition-all duration-500'>{item.title}</p>
            <div className='flex space-x-2 mt-1'>
              <FaRegStar className='text-yellow-500 text-sm' />
              <FaRegStar className='text-yellow-500 text-sm' />
              <FaRegStar className='text-yellow-500 text-sm' />
              <FaRegStar className='text-yellow-500 text-sm' />
              <FaRegStar className='text-yellow-500 text-sm' />
            </div>
            <div className='flex space-x-5 w-full h-auto '>
            <p className='font-semibold text-xl mt-2'>&#8377; {item.price.toFixed(2)}</p>
            <p className='font-semibold text-lg text-red-500 mt-2 line-through'>&#8377;{item.Accurate?.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default FlashSale