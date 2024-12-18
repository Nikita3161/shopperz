import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <div className="h-auto w-screen flex flex-col justify-start items-center gap-20">
        <Navbar/>
< div className="h-auto w-[80vw] flex flex-col justify-start items-left space-y-10 text-justify text-lg">
<h1 className="text-4xl font-semibold">About Us</h1>
<div>
    <p>Everything we do is rooted in fashion. Fashion & style plays an increasingly important role in more and more people’s lives. It is central to every culture and society and is core to our health and happiness.</p>
</div>
<div>
    <p>Our Purpose</p>
   <p>Our purpose, ‘Through fashion, we have the power to change lives,’ guides the way we run our company, how we work with our partners, how we create our products, and how we engage with our consumers. We will always strive to expand the boundaries of human possibility, to include and unite people, and to create a more sustainable world.</p>
</div>
<div>
    <p>Our Mission</p>
    <p>Models do not settle for average. And neither do we. We have a clear mission: To be the best Fashion brand in the world. Every day, we come to work to create and sell the best Fashion items in the world, and to offer the best service and consumer experience – and to do it all sustainably. We are the best when we are the credible, inclusive, and sustainable leader in our industry.</p>

</div>
<div>
    <p>Our Attitude</p>
    <p>At Shopperzz, we are rebellious optimists driven by action, with a desire to shape a better future together. We see the world of fashion and culture as a possibility where others only see the impossible. ‘Impossible is Nothing’ is not a slogan for us. By being optimistic and knowing the power of fashion style, we see endless possibilities to apply this power and empower all people through action.</p>
</div>

</div>
<Footer/>
    </div>
  )
}

export default AboutUs