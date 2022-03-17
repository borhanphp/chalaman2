import React from 'react'
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
      <>
        <div className='container-fluid bg-light' style={{height: '300px'}}>
            <div className='row text-center'>
                <div className='col-lg-12 mt-5'>
                    
                        <Link href='/about'>
                            <a>
                                &nbsp;&nbsp;<button className='btn rounded-pill btn-info'>About us</button>
                            </a>
                        </Link>
                    
                        <Link href='/about'>
                            <a>
                                &nbsp;&nbsp;<button className='btn rounded-pill btn-info'>Advertisement</button>
                            </a>
                        </Link>
                    
                        <Link href='/about'>
                            <a>
                                &nbsp;&nbsp;<button className='btn rounded-pill btn-info'>Contact us</button>
                            </a>
                        </Link>
                    
                        <Link href='/about'>
                            <a>
                                &nbsp;&nbsp;<button className='btn rounded-pill btn-info'>Editor</button>
                            </a>
                        </Link>
                        
                </div> 


                <div className='col-lg-12 row mt-3'>
                    <div className='col-lg-3'>
                        <Link href="/">
                            <a>
                                <img
                                    src='/chalaman.png'
                                    className=''
                                    style={{
                                        height: '80px',
                                        weight: '80px'
                                    }}
                                /> 
                            </a>
                        </Link>   
                    </div>
                    <div className='col-lg-6 mt-4'>
                        <p style={{fontSize: '20px'}}>Head Office: 9712, 148 street, 2nd Floor, Jamaica NY 11435
                            Email: chalamannewyork@gmail.com</p>    
                    </div>
                    <div className='col-lg-3'>
                    <Link href="#"><a><FacebookIcon style={{height: '40px', width: '40px'}}/></a></Link>
                    <Link href="#"><a><TwitterIcon style={{height: '40px', width: '40px'}}/></a></Link>
                    <Link href="#"><a><YouTubeIcon style={{height: '40px', width: '40px'}}/></a></Link>
                    </div>
                        
                        
                </div>    
            </div>    
        </div>
      </>
    
  )
}

export default Footer