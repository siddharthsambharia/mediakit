import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
function Navbar() {
  return (
    <div>

        
      {/* <div className='hidden md:flex '> */}

                            <div className=' md:hidden sticky'>
                                <div className='flex place-content-start'>
                                    <div className='flex-1 mx-4 mt-4'>Logo</div>
                                    <div className='mx-4 mt-4'>Sign Up</div>
                                </div>
                            </div>

                            
                    <div className='circle'></div>
                    {/* </div> */}
                      
                        <div className=' h-16  mx-16 sticky'>

                <div className='navbar'>
                <div className='flex justify-content px-4 py-4 text-white'>

                                <div className='flex-1'>Logo</div>

                                <div className='flex'>
                                    <div className='px-4'>
                                        <Link to="features" spy={true} smooth={true} offset={-4} duration={1000} >
                                        Features </Link></div>
                                    <div className='px-4'>  <Link to="signup" spy={true} smooth={true} offset={-100} duration={500} >
                                    Sign-Up</Link>
                                    </div>
                                </div>

                            </div>
                            </div>

                

                        </div>
        
    
    </div>
  )
}

export default Navbar