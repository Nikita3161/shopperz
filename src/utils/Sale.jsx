import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Sale = () => {
  
  return (
    
    <div className='h-auto w-screen flex flex-col justify-center items-center gap-5'>
      {/* 1st */}
    <div className='h-[500px] w-screen flex justify-center items-center '>
<Carousel className='h-[500px] w-[80vw] rounded-3xl'
autoPlay 

infiniteLoop 
interval={5000} 
transitionTime={500} 
  stopOnHover={true}
showArrows={false}
showIndicators={true}
showThumbs={false}
showStatus={false}

 
  >
    <div  className='h-[500px] w-[80vw] flex justify-center rounded-3xl items-center bg-[url("https://demo.shopperz.codezenbd.com/storage/29/conversions/slider_one-cover.png")] bg-cover bg-center bg-no-repeat'>
        
    </div>
    <div  className='h-[500px] w-[80vw] bg-gray-400 flex justify-center  rounded-3xl items-center bg-[url("https://demo.shopperz.codezenbd.com/storage/31/conversions/slider_three-cover.png")] bg-cover bg-center bg-no-repeat'>
        
        </div>
        <div  className='h-[500px] w-[80vw] bg-gray-400 flex justify-center  rounded-3xl items-center bg-[url("https://demo.shopperz.codezenbd.com/storage/30/conversions/slider_two-cover.png")] bg-cover bg-center bg-no-repeat'>
        
        </div>

</Carousel>

    </div>
    {/* 2nd */}
    <div className='h-[400px] w-[80vw] flex flex-col justify-center items-left space-y-5'>
<h1 className='text-4xl font-semibold'>Browse By Categories</h1>
<Carousel autoPlay
infiniteLoop
interval={2000}
transitionTime={500} 
showStatus={false}
showArrows={false}
stopOnHover={true}
showIndicators={false}
>
<div className='flex justify-center items-center gap-8'>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/tops_&_t-shirts-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Top & T-Shirts</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/shoes-thumb.png')}alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Shoes</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/basket_ball-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Basket Ball</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/running-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Running</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/sandals_&_slides-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Sandles</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/sneakers-thumb.png')}alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Sneakers</p>
</div>

</div>
{/* second */}
<div className='flex justify-center items-center gap-8'>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/soccer.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Soccer</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/Accessoriess.png')}alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Accessories</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/bags_&_backpacks-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Bags & BackPacks</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/hat_&_beanies-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Hat & Benies</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/socks-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Socks</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/underwear-thumb.png')}alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Underwear</p>
</div>

</div>
{/* third */}
<div className='flex justify-center items-center gap-8'>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/women-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Women</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/clothing-thumb.png')}alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Clothing</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/dresses_&_skirts-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Dresses & Skirts</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/hoodies_&_sweatshirts-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Hoodies & Sweat..</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/pants-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Pants</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/tights_&_leggings-thumb.png')}alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Tight & Leggies</p>
</div>

</div>
{/* fourth */}
<div className='flex justify-center items-center gap-8'>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/hats-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Hats</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/socks1-thumb (1).png')}alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Socks</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/juniors-thumb.png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Juniors</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/clothing1-thumb (1).png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Clothing</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/hoodies_&_sweatshirts1-thumb (1).png')} alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Hoodies & Swea..</p>
</div>
<div className='h-auto w-auto flex flex-col justify-start items-center space-y-3'>
<img src={require('../assets/shorts-thumb.png')}alt='name'className='h-[130px] w-[130px] rounded-t-xl'/>
<p className='text-xl font-semibold hover:text-orange-500'>Shorts</p>
</div>

</div>
</Carousel>
    </div>
    {/* 3rd */}
    <div className='h-auto w-[80vw] flex justify-center items-center gap-8'>
<div className='h-[220px] w-[400px] flex justify-center items-center rounded-xl bg-[url("https://demo.shopperz.codezenbd.com/storage/625/conversions/winter_exclusive_for_man-cover.png")] bg-cover bg-center'>
</div>
<div className='h-[220px] w-[400px] flex justify-center items-center rounded-xl bg-[url("https://demo.shopperz.codezenbd.com/storage/626/conversions/winter_exclusive_for_woman-cover.png")] bg-cover bg-center'>
</div>
<div className='h-[220px] w-[400px] flex justify-center items-center rounded-xl bg-[url("https://demo.shopperz.codezenbd.com/storage/627/conversions/winter_exclusive_for_kids-cover.png")] bg-cover bg-center'>
</div>
    </div>
    {/* 4th */}
   

    </div>
  )
}

export default Sale