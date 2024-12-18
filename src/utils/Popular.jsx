import React from 'react'
import { FaRegHeart, FaRegStar } from "react-icons/fa";

const Popular = () => {
     // Array of collection items
  const collectionItems = [
    {
      id: 1,
      title: "Ultra Bounce Shoes",
      image: "https://demo.shopperz.codezenbd.com/storage/574/conversions/1-cover.png",
      price: 80.00,
      Accurate: 160.00,
    },
    {
      id: 2,
      title: "Classic Sportswear",
      image: "https://demo.shopperz.codezenbd.com/storage/140/conversions/1-cover.png",
      price: 70.00,
      Accurate: 100.00,
    },
    {
      id: 3,
      title: "Classic French Men's Hoodie",
      image: "https://demo.shopperz.codezenbd.com/storage/91/conversions/1-cover.png",
      price: 150.00 ,
      Accurate: 200.00,
      
    },
    {
      id: 4,
      title: "Team Red Hoodie",
      image: "https://demo.shopperz.codezenbd.com/storage/96/conversions/1-cover.png",
      price: 60.00,
      Accurate: 120.00,
    },
    {
      id: 5,
      title: "Dior University Blue",
      image: "https://demo.shopperz.codezenbd.com/storage/224/conversions/1-cover.png",
      price: 200.00,
      Accurate: 400.00,
    },
    {
      id: 6,
      title: "Dri-Fit Miler",
      image: "https://demo.shopperz.codezenbd.com/storage/144/conversions/1-cover.png",
      price: 100.00,
      Accurate: 150.00,
    },
    {
      id: 7,
      title: "Phoenix Fleece",
      image: "https://demo.shopperz.codezenbd.com/storage/314/conversions/1-cover.png",
      price: 100.00,
      Accurate: 120.00,
    },
    {
      id: 8,
      title: "Queen Cover-Up Dress",
      image: "https://demo.shopperz.codezenbd.com/storage/309/conversions/1-cover.png",
      price: 150.00,
      Accurate: 260.00,
    },
  ];
  return (
    
    <div className='h-auto w-[80vw] flex flex-col justify-center items-left gap-8'>
      <h1 className='text-4xl font-semibold '>Most Popular</h1>

      {/* Cards Container */}
      <div className='h-auto w-[80vw] justify-start items-center gap-8 grid grid-cols-4'>
        {collectionItems.map((item) => (
          <div
            key={item.id}
            className='h-[400px] w-[300px] flex flex-col justify-center items-left relative hover:shadow-lg p-4 bg-slate-50 rounded-lg'>
            <div 
              className='h-[300px] w-full bg-cover bg-center rounded-lg transition-transform hover:duration-500 hover:bg-[length:110%] hover:bg-[rotate:3] hover:scale-105 ' 
              style={{ backgroundImage: `url(${item.image})`, transform: "rotate(0deg)" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(3deg) scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg) scale(1)"}
            ></div>

            {/* Heart Icon */}
            <div className='h-7 w-7 flex justify-center items-center absolute bg-white rounded-full z-10 top-4 right-5'>
              <FaRegHeart className='text-lg text-gray-500 hover:text-orange-400' />
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

export default Popular