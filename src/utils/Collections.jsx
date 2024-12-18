import React from 'react';
import { FaRegHeart, FaRegStar } from "react-icons/fa";

const Collections = () => {
  // Array of collection items
  const collectionItems = [
    {
      id: 1,
      title: "Phantom Luna",
      image: "https://demo.shopperz.codezenbd.com/storage/244/conversions/1-cover.png",
      price: 280.00,
      Accurate: 400.00,
    },
    {
      id: 2,
      title: "Pegasus 40",
      image: "https://demo.shopperz.codezenbd.com/storage/384/conversions/1-cover.png",
      price: 96.00,
      Accurate: 120.00,
    },
    {
      id: 3,
      title: "Camo Hoodie",
      image: "https://demo.shopperz.codezenbd.com/storage/499/conversions/1-cover.png",
      price: 140.00 ,
      Accurate: 200.00,
      
    },
    {
      id: 4,
      title: "Classic Gabardine",
      image: "https://demo.shopperz.codezenbd.com/storage/135/conversions/1-cover.png",
      price: 64.00,
      Accurate: 80.00,
    },
    {
      id: 5,
      title: "Athletic Socks",
      image: "https://demo.shopperz.codezenbd.com/storage/279/conversions/1-cover.png",
      price: 20.00,
      Accurate: 25.00,
    },
    {
      id: 6,
      title: "Free Metcon 5",
      image: "https://demo.shopperz.codezenbd.com/storage/424/conversions/1-cover.png",
      price: 160.00,
      Accurate: 250.00,
    },
    {
      id: 7,
      title: "Air Sweatshirt",
      image: "https://demo.shopperz.codezenbd.com/storage/494/conversions/1-cover.png",
      price: 96.00,
      Accurate: 120.00,
    },
    {
      id: 8,
      title: "Official Team Bag",
      image: "https://demo.shopperz.codezenbd.com/storage/249/conversions/1-cover.png",
      price: 130.00,
      Accurate: 260.00,
    },
  ];

  return (
    <div className='h-auto w-[80vw] flex flex-col justify-center items-left gap-10'>
      <h1 className='text-4xl font-semibold '>Trendy Collections</h1>

      {/* Cards Container */}
      <div className='h-auto w-[80vw] justify-start items-center gap-8 grid grid-cols-4'>
        {collectionItems.map((item) => (
          <div
            key={item.id}
            className='h-[400px] w-[300px] flex flex-col justify-center items-left relative hover:shadow-lg p-4 bg-slate-50 rounded-lg'>
            <div 
              className='h-[300px] w-full bg-cover bg-center rounded-lg transition-all duration-300 hover:bg-[length:110%] hover:scale-105' 
              style={{ backgroundImage: `url(${item.image})`, transform: "rotate(0deg)" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "rotate(3deg) scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0deg) scale(1)"}
            ></div>

            {/* Heart Icon */}
            <div className='h-7 w-7 flex justify-center items-center absolute bg-white rounded-full z-10 top-4 right-5'>
              <FaRegHeart className='text-xl text-gray-500 hover:text-orange-400' />
            </div>

            {/* Card Details */}
            <p className='text-lg font-semibold mt-4 hover:text-red-400 transition-all duration-500'>{item.title}</p>
            <div className='flex space-x-2 mt-1'>
              <FaRegStar className='text-yellow-500 text-lg' />
              <FaRegStar className='text-yellow-500 text-lg' />
              <FaRegStar className='text-yellow-500 text-lg' />
              <FaRegStar className='text-yellow-500 text-lg' />
              <FaRegStar className='text-yellow-500 text-lg' />
            </div>
            <div className='flex space-x-5 w-full h-auto '>
            <p className='font-semibold text-xl mt-2'>&#8377; {item.price.toFixed(2)}</p>
            <p className='font-semibold text-lg text-red-500 mt-2 line-through'>&#8377;{item.Accurate?.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='h-[500px] w-[80vw] flex justify-center items-center'>
        <img src={require("../assets/winter_collection-preview.png")} alt='name'className='rounded-3xl'/>
      </div>
    </div>
  );
};

export default Collections;
