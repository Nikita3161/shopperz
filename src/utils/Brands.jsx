import React from 'react';
import Marquee from "react-fast-marquee";

const Brands = () => {
  // Array of brand data
  const brandData = [
    { 
        img: require("../assets/puma-cover.png"), 
        title: "Puma" 
    },
    { 
        img: require("../assets/babymel-cover.png"), 
        title: "Babymel" 
    },
    { 
        img: require("../assets/burberry-cover.png"), 
        title: "Burberry"
     },
    { 
        img: require("../assets/camper.png"),
        title: "Camper"
     },
    { 
        img: require("../assets/chanel.png"), 
        title: "Chanel" 
    },
    { 
        img: require("../assets/dr._martens-cover.png"),
        title: "Dr.Martens"
    },
    { 
        img: require("../assets/fila-cover.png"), 
        title: "Fila"
     },
    { 
        img: require("../assets/camper.png"), 
        title: "Fila"
     },
    { 
        img: require("../assets/levi's-cover.png"), 
        title: "Levi's"
     },
   
  ];

  return (
    <div>
    <div className='h-[300px] w-[80vw] flex flex-col justify-center items-left gap-8'>
      <h1 className='text-4xl font-semibold'>Popular Brands</h1>
      <Marquee direction='right'loop={0} pauseOnClick={true}>
        <div className='h-auto w-[80vw] flex justify-center items-center'>
          {brandData.map((brand, index) => (
            <div
              key={index}
              className='h-[150px] w-[200px] flex flex-col justify-center items-center space-y-5 bg-white shadow-lg mx-4'
            >
              <img
                src={brand.img}
                alt={brand.title}
                className='h-[80px] w-[80px] object-contain'
              />
              <p className='text-xl font-semibold hover:text-red-400 transition-all duration-500'>
                {brand.title}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
    <div className='h-auto w-[80vw] flex justify-center items-center gap-6'>
<div className='h-[200px] w-[300px] flex  justify-center items-center space-x-5 bg-white'>
<div className='flex flex-col justify-center items-center'>
    <img src={require("../assets/professional_service-thumb.png")} alt='name'className='h-[30px] w-[30px] object-cover'/>
</div>
<div className='flex-col space-y-2'>
<h1 className='font-semibold text-xl'>Professional Service</h1>
<p className='text-lg text-gray-500'>Efficient customer support from passionate team</p>
</div>
</div>
<div className='h-[200px] w-[300px] flex  justify-center items-center space-x-5 bg-white'>
<div className='flex flex-col justify-center items-center'>
    <img src={require("../assets/secure_payment-thumb.png")} alt='name'className='h-[30px] w-[30px] object-cover'/>
</div>
<div className='flex-col space-y-2'>
<h1 className='font-semibold text-xl'>Secure Payment</h1>
<p className='text-lg text-gray-500'>Different secure payment methods</p>
</div>
</div>
<div className='h-[200px] w-[300px] flex  justify-center items-center space-x-5 bg-white'>
<div className='flex flex-col justify-center items-center'>
    <img src={require("../assets/fast_delivery-thumb.png")} alt='name'className='h-[30px] w-[30px] object-cover'/>
</div>
<div className='flex-col space-y-2'>
<h1 className='font-semibold text-xl'>Fast Delivery</h1>
<p className='text-lg text-gray-500'>Fast and convenient door to door delivery</p>
</div>
</div>
<div className='h-[200px] w-[300px] flex  justify-center items-center space-x-5 bg-white'>
<div className='flex flex-col justify-center items-center'>
    <img src={require("../assets/quality_&_savings-thumb.png")} alt='name'className='h-[30px] w-[30px] object-cover'/>
</div>
<div className='flex-col space-y-2'>
<h1 className='font-semibold text-xl'>Quality & Savings</h1>
<p className='text-lg text-gray-500'>Comprehensive quality control and affordable prices</p>
</div>
</div>
    </div>
    </div>
  );
};

export default Brands;
