import React from 'react'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import HomeComponents from '../../components/HomeComponents'


// http://localhost:3000/page/Home


const MainHomePage = () => {
  return (
    <div>
      <Navigation/>
       <HomeComponents/>
      <Footer/>
    </div>
  )
}
 

export default MainHomePage
