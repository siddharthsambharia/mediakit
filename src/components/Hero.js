import React from "react";
import Img1 from "../images/mkt3.svg";
import Img2 from "../images/mkt5.svg";
import "./Hero.css";
import { useState } from "react";

function Hero() {
  const [toggle, setToggle] = useState('true');

  const changeImage = () => {
    console.log('siddharth')
    if(toggle){
      setToggle(false) 
    }
    else {
      setToggle(true) 
    }
  }





  return (
    <div>
   
                          
   {/* <div className='md:hidden pb-4 px-2'>
                                <div className='flex place-content-start text-white'>
                                    <div className='flex-1 mx-4 mt-4'>berry</div>
                                    <div className='mx-4 mt-4'><a href='mailto:name@email.com'>Contact Us</a></div>
                                </div>
                            </div>  */}


      <div className="flex flex-col place-items-center py-8 md:py-12">
        <div className="text-2xl md:py-2 md:text-6xl">
          {/* <div className="wrapper"> */}

          <div className="flex h-12 md:h-16">
            <p>Digital identities for</p>
            <div className="words">
              <span>creator</span>
              <span>designer</span>
              <span>editor</span>
              <span>freelancer</span>
            </div>
          </div>
        </div>
        <div className=" text-1xl py-1 md:text-2xl md:py-2 mx-8 md:mx-20 md:mx-80">
          Show what you do in a way that gets people to say "yes" ✨
        </div>

        <div className="md:mt-8 mt-4">
          <form
            className=" bg-white font-sans text-1xl py-2 px-3 rounded-full border-black"
            action="https://formspree.io/f/mzbwvbnq"
            method="POST"
          >
            {/* <label className='text-sm py-1 md:pr-8 md:pl-2 md:my-8 pr-2 my-4'>
                    Your email:
                
                </label>  */}
            <input
              type="email"
              name="email"
              placeholder="Your email:"
              className="text-1xl py-1 md:pr-8 md:pl-2  pr-2 "
            ></input>

            <button
              className="md:text-lg hover:bg-gray-700 text-base py-1 md:px-3 px-1 bg-black font-normal text-white font-sans rounded-full  "
              type="submit" 
            >
              sign up
            </button>
          </form>
        </div>
        {/* <button className='rounded-sm bg-blue-500 font-sans text-1xl py-1 md:text-2xl md:py-2 mx-4 px-8 mt-4 md:mt-16 rounded-md' id='signup'>Sign-up</button> */}
      </div>
      <div className="flex flex-col place-items-center">
        <div className=" items-center pt-6">
          <label
            for="large-toggle"
            class="inline-flex relative items-center cursor-pointer"
          >
            
            <input
              type="checkbox"
              value={toggle}
              id="large-toggle"
              class="sr-only peer"
              onClick={changeImage}
            ></input>

            <div class="w-44 h-8 bg-black peer-focus:ring-4
             peer-focus:ring-purple-400 rounded-full peer peer-checked:after:translate-x-full
              peer-checked:after:border-white after:absolute 
              after:top-0.5 after:bg-white after:border-gray-300 
              after:border after:rounded-full after:h-7 after:w-[86px] after:transition-all
               peer-checked:bg-black ">

            <div className="flex place-content-between px-2 py-1 font-medium text-white">
              <div>Creator</div>  <div>Creative</div>
              </div> 
              </div>
          </label>
        </div>
        
      </div>
      

      <div className="flex flex-col place-items-center">
      {toggle ? (
       <img
       className="object-scale-down h-auto p-auto items"
       src={Img1}
       alt=""
     />
        ) : (
          <img
            className="inactive"
            className="object-scale-down h-auto p-auto items"
            src={Img2}
            alt=""
          />
        )}




        
      </div>



      {/* <div className="toggle-wrapper">
        {toggle ? (
          <img
            className="active"
            src={Img2}
            alt="yellow star"
          />
        ) : (
          <img
            className="inactive"
            src={f3}
            alt="black and white star"
          />
        )}
      </div>  */}
    </div>
  );
}

export default Hero;
