import React from 'react'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
// import { NewReleases }  from '../pages_crud/Products'
// import Banner from '../components/Banner' 
// import BottomBanner from '../components/Banner'
// import { GiftGuide } from '../components/GiftGuide';
// import subBanner1 from "../assets/images/home/subBanner1.png";
// import subBanner2 from "../assets/images/home/subBanner2.png";


const HomePage = () => {
  
  return (
    <>
    <div className="banner center">
      <Banner />
    </div>

    <div className="banner">
      <GiftGuide />
    </div>

    <div class="subBanner center">
      <div class="sb1"><img src={subBanner1} alt="subbanner1" width={725}/></div>
      <div class="sb2"><img src={subBanner2} alt="subbanner2" width={725}/></div>
    </div>  

    <div className='px-[4rem]'>
      <NewReleases />  
    </div>
 
    <div className="botBanner center">
      <BottomBanner />
      
    </div>


    </>
  );

  }


const MainHomePage = () => {
  return (
    <div>
      <Navigation/>
       {/* <HomePage/> */}
      <Footer/>
    </div>
  )
}
 

export default MainHomePage
