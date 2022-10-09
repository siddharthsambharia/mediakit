import React from 'react'
import f1 from '../images/f1.svg'
import f2 from '../images/f2.svg'
import f3 from '../images/f3.svg'
import f3m from '../images/f3m.svg'



function Features() {
  return (


    <div id='features'>
        <div className='flex place-content-center mb-2 mt-2 md:mb-16'>
<div className='md:text-6xl text-4xl text-center px-2 font-serif'> Features</div><div className='md:text-6xl text-4xl text-purple-600'>101</div>
</div>
<div className='flex flex-col pt-2 md:pt-8 '>

<div className='flex flex-wrap place-content-evenly pt-4 pb-16 '> 

    <div className='flex flex-col mx-8  md:basis-1/4'>
        <div className=' text-3xl md:text-7xl py-1 '>Feature 1</div>
        <div className='text-1xl md:text-3xl py-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo enim malesuada ornare dolor amet, amet, tincidunt eros neque.</div>
    </div>

    <div className=''>
        <img className='object-scale-down h-96 p-auto items ' src={f1} alt="" />
    </div>

</div>




<div className='flex flex-wrap-reverse place-content-evenly p-6 md:p-16 bg-[#E9E9E9]'> 

<div className=''>
        <img className='object-scale-down h-96 p-auto items ' src={f2} alt="" />
    </div>

    <div className='flex flex-col mx-8  md:basis-1/4'>
        <div className=' text-3xl md:text-7xl py-1 '>Feature 2</div>
        <div className='text-1xl md:text-3xl py-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo enim malesuada ornare dolor amet, amet, tincidunt eros neque.</div>
    </div>

   
    
</div>



<div className='flex flex-wrap place-content-evenly p-6 md:p-16 '> 

    <div className='flex flex-col mx-8  md:basis-1/4'>
        <div className=' text-3xl md:text-7xl py-1 '>Feature 3</div>
        <div className='text-1xl md:text-3xl py-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo enim malesuada ornare dolor amet, amet, tincidunt eros neque.</div>
    </div>

    <div className=''>
        <img className='object-scale-down h-80 p-auto items  ' src={f3m} alt="" />
    </div>

</div>























</div>

    </div>
  )
}

export default Features