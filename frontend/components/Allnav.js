import React from 'react'
import Topnav from '../components/frontend/Topnav'
import Logosec from '../components/frontend/Logosec'
import Navbar from '../components/frontend/Navbar';
import Scrollbar from '../components/frontend/Scrollbar'

const Allnav = () => {
  return (
      <>    
        <Topnav/>
        <Logosec/>
        <Scrollbar/>
        <Navbar/>
    </>

  )
}

export default Allnav