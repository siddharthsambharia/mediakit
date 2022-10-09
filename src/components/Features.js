import React from 'react'
import Img1 from '../images/Mockup.png'

function Features() {
  return (


    <div id='features'>
        <div className='flex place-content-center mb-16'>
<div className='text-6xl text-center px-2 font-serif'> Features</div><div className='text-6xl text-purple-600'>101</div>
</div>
<div className='flex flex-col pt-8 '>

<div className='flex flex-wrap place-content-evenly p-4 '> 

    <div className='flex flex-col mx-8  md:basis-1/4'>
        <div className=' text-4xl md:text-6xl py-1 '>Feature 1</div>
        <div > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo enim malesuada ornare dolor amet, amet, tincidunt eros neque.</div>
    </div>

    <div className=''>
        <img className='object-scale-down h-72 p-auto items ' src={Img1} alt="" />
    </div>

</div>




<div className='flex flex-wrap-reverse place-content-evenly p-4  bg-slate-100'> 

<div className=''>
        <img className='object-scale-down h-72 p-auto items ' src={Img1} alt="" />
    </div>

    <div className='flex flex-col mx-8  md:basis-1/4'>
        <div className=' text-4xl md:text-6xl py-1 '>Feature 2</div>
        <div > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo enim malesuada ornare dolor amet, amet, tincidunt eros neque.</div>
    </div>

   
    
</div>



<div className='flex flex-wrap place-content-evenly p-4 '> 

    <div className='flex flex-col mx-8  md:basis-1/4'>
        <div className=' text-4xl md:text-6xl py-1 '>Feature 3</div>
        <div > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo enim malesuada ornare dolor amet, amet, tincidunt eros neque.</div>
    </div>

    <div className=''>
        <img className='object-scale-down h-72 p-auto items ' src={Img1} alt="" />
    </div>

</div>























</div>

    </div>
  )
}

export default Features