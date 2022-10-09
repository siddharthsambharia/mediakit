import React from 'react'
import Img2 from '../images/mkt3.svg'
import './Hero.css'


function Hero() {
  return (
    <div>
     

        <div className='flex flex-col place-items-center py-4 md:py-12'>
            <div className='text-2xl md:py-2 md:text-6xl'>

            {/* <div className="wrapper"> */}
            
                <div className='flex h-12 md:h-16'>
       <p>digital resume for</p>
       <div className="words">
           <span>creator</span>
           <span>designer</span>
           <span>coder</span>
           <span>freelancer</span>
           <span>writer</span>
       </div>
   </div>
       
            </div>
            <div  className=' text-1xl py-1 md:text-2xl md:py-2 mx-20 md:mx-80' >
            Show what you do in a way that gets people to say "yes"            </div>

        <div className='md:mt-8 mt-4'>
                <form className=' bg-white font-sans text-1xl py-2 px-2 rounded-full border-black' action="https://formspree.io/f/mzbwvbnq" method="POST">
                
               {/* <label className='text-sm py-1 md:pr-8 md:pl-2 md:my-8 pr-2 my-4'>
                    Your email:
                
                </label>  */}
                <input type="email" name="email" placeholder='Your email:' className='text-1xl py-1 md:pr-8 md:pl-2  pr-2 '></input>
                
                <button className='md:text-lg text-base py-1 md:px-3 px-1 bg-black font-normal text-white font-sans rounded-full  ' type="submit">sign up ></button>
                </form>
        </div>
 {/* <button className='rounded-sm bg-blue-500 font-sans text-1xl py-1 md:text-2xl md:py-2 mx-4 px-8 mt-4 md:mt-16 rounded-md' id='signup'>Sign-up</button> */}

        </div>
       <div className='flex flex-col place-items-center'>
        <div className=' items-center'>
        <label for="large-toggle" class="inline-flex relative items-center cursor-pointer">
            
  <input type="checkbox" value="" id="large-toggle" class="sr-only peer"></input>
  
  <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
 
</label>
</div>
</div>

<div className='flex flex-col place-items-center'>


<img className='object-scale-down h-auto p-auto items' src={Img2} alt="" />

{/*  */}
</div>





    </div>
  )
}

export default Hero