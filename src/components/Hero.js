import React from 'react'
import Img1 from '../images/BWAH.png'
import './Hero.css'


function Hero() {
  return (
    <div>
     

        <div className='flex flex-col place-items-center py-4 md:py-12'>
            <div className='text-2xl md:py-2 md:text-6xl'>

            {/* <div className="wrapper"> */}
            
                <div className='flex h-12 md:h-16'>
       <p>digital resume for</p>
       <div class="words">
           <span>creator</span>
           <span>designer</span>
           <span>coder</span>
           <span>freelancer</span>
           <span>writer</span>
       </div>
   </div>
       
            </div>
            <div  className=' text-1xl py-1 md:text-2xl md:py-2 mx-20 md:mx-80' >
            Lorem ipsum, dolor sit amet consecr sdklfns ldkfs ldfk slkdfjskl fldksn l slkdfnadipisicing e blan
            </div>
            <button className='rounded-sm bg-blue-500 font-sans text-1xl py-1 md:text-2xl md:py-2 mx-4 px-8 mt-4 md:mt-16 rounded-md' id='signup'>Sign-up</button>

        </div>
       


<div className='flex flex-col place-items-center'>


<img className='object-scale-down h-auto p-auto items' src={Img1} alt="" />

{/*  */}
</div>





    </div>
  )
}

export default Hero
