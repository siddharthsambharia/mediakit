import React from 'react'
import {Link} from 'react-scroll'
import Navbar from './Navbar.js'

function Footer() {
  return (
    <div className='bg-[#1F1F24] py-24 font-CirculaBook'>
      <div className='md:text-7xl text-4xl text-center text-white'> Umm.. </div>
      <div className='md:text-2xl px-4 text-center text-white'> Are you still thinking? Sign-up and 10x your opportunities now  
</div>  
<div className='mx-auto flex place-content-center py-8'>
<form
            className=" bg-white font-sans text-1xl py-2 px-2 rounded-full border-black"
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
              className="md:text-lg text-base py-1 md:px-3 px-1 bg-black font-normal text-white font-sans rounded-full  "
              type="submit"
            >
              sign up
            </button>
          </form>
          </div>

          <div className='md:hidden'>
            <div className='text-center text-2xl text-white'><a href='mailto:name@email.com'>Contact Us</a></div>
          </div>

    </div>
  )
}

export default Footer