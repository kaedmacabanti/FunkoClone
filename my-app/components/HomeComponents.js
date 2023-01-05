import Image from "next/image"
import topBanner from "../assets/images/home/topBanner.png";
import gg1 from '../assets/images/gift-guide/gg1.png'
import gg2 from '../assets/images/gift-guide/gg2.png'
import gg3 from '../assets/images/gift-guide/gg3.png'
import gg4 from '../assets/images/gift-guide/gg4.png'
import gg5 from '../assets/images/gift-guide/gg5.png'
import gg6 from '../assets/images/gift-guide/gg6.png'
import gg7 from '../assets/images/gift-guide/gg7.png'
import gg8 from '../assets/images/gift-guide/gg8.png'
import gg9 from '../assets/images/gift-guide/gg9.png'
import gg10 from '../assets/images/gift-guide/gg10.png'
import gg11 from '../assets/images/gift-guide/gg11.png'
import gg12 from '../assets/images/gift-guide/gg12.png'
import gg13 from '../assets/images/gift-guide/gg13.png'
import gg14 from '../assets/images/gift-guide/gg14.png'
import gg15 from '../assets/images/gift-guide/gg15.png'
import gg16 from '../assets/images/gift-guide/gg16.png'
import gg17 from '../assets/images/gift-guide/gg17.png'
import subBanner1 from "../assets/images/home/subBanner1.png";
import subBanner2 from "../assets/images/home/subBanner2.png";
import { NewReleases } from "./AllProducts";
import botBanner from "../assets/images/home/botBanner.png";

const TopBanner = () => {
    return (
       <Image src={topBanner} alt="" width={1450}/>
)}

const GiftGuide = () => {
    return (
      <body>
          <div class="containerGift center">
              <div class="cards">
                  <div class="card center"><Image src={gg1} alt="1" width={110}/></div>
                  <div class="card center"><Image src={gg2} alt="2" width={120}/></div>
                  <div class="card center"><Image src={gg3} alt="3" width={120}/></div>
                  <div class="card center"><Image src={gg4} alt="4" width={120}/></div>
                  <div class="card center"><Image src={gg5} alt="5" width={120}/></div>
                  <div class="card center"><Image src={gg6} alt="6" width={120}/></div>
                  <div class="card center"><Image src={gg7} alt="7" width={120}/></div>
                  <div class="card center"><Image src={gg8} alt="8" width={120}/></div>
                  <div class="card center"><Image src={gg9} alt="9" width={120}/></div>
                  <div class="card center"><Image src={gg10} alt="10" width={110}/></div>
                  <div class="card center"><Image src={gg11} alt="11" width={120}/></div>
                  <div class="card center"><Image src={gg12} alt="12" width={120}/></div>
                  <div class="card center"><Image src={gg13} alt="13" width={120}/></div>
                  <div class="card center"><Image src={gg14} alt="14" width={120}/></div>
                  <div class="card center"><Image src={gg15} alt="15" width={120}/></div>
                  <div class="card center"><Image src={gg16} alt="16" width={120}/></div>
                  <div class="card center"><Image src={gg17} alt="17" width={120}/></div>
              </div>
          </div>
      </body>
    )
}
  
const SubBanner = () => {
  return (
    <div class="display flex">
       <Image src={subBanner1} alt="" width={725}/>
       <Image src={subBanner2} alt="" width={725}/>
    </div>  
  )
}

  
const NewReleases = () => {
    return (
      <div class="display flex">
         <Image src={subBanner1} alt="" width={725}/>
         <Image src={subBanner2} alt="" width={725}/>
      </div>  
    )
}

export const BottomBanner = () => {
    return (
       <Image src={botBanner} alt=" " width={1450}/>
  )}
  
   
  

const HomeComponents = () => {
  return (
    <div className="">
        <TopBanner/>
        <GiftGuide/>
        <SubBanner/>
        <BottomBanner/>
    </div>
  )
}



export default HomeComponents


