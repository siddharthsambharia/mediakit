import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react'
import {Link} from 'react-scroll'
function Navbar() {



// const [sticky, setSticky] = useState(false);

// useEffect(() => {
//     const handleScroll = () => {
//         setSticky(window.scrollY > 200)
//     }

//     window.addEventListener('scroll', handleScroll)
// })







  return (
    <div>



        
      {/* <div className='hidden md:flex '> */}
      <div className='width'>
        {/* <div className='pt-8 bg-blue-700'></div> */}
      </div>

{/* 
      <div className={${sticky ? 'sticky'}}> </div> */}
                            <div className='md:hidden '>
                                <div className='flex place-content-start'>
                                    <div className='flex-1 mx-4 mt-4'>Logo</div>
                                    <div className='mx-4 mt-4'>Sign Up</div>
                                </div>
                            </div>

                            
                    <div className='circle'></div>
                    {/* </div> */}
                      
                        <div className=' h-16  mx-16 '>

                <div className='navbar'>
                <div className='flex justify-content px-4 py-4 text-white md:sticky md:top-0'>
                                <div className='flex-1'>berry</div>

                                <div className='flex'>
                                    <div><a href='mailto:name@email.com'>Contact Us</a></div>
                                    {/* <div className='px-4'>
                                        <Link to="features" spy={true} smooth={true} offset={-4} duration={1000}  >
                                        Features </Link></div>
                                    <div className='px-4'>  <Link to="signup" spy={true} smooth={true} offset={-100} duration={500} >
                                    Sign-Up</Link>
                                    </div> */}
                                </div>

                            </div>
                            </div>

                

                        </div>
        
    
    </div>
  )
}

export default Navbar