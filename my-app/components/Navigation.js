 
import logo from '../assets/funko-logo-white.svg'
import hero from '../assets/images/navicons/batman.png'
import orange from '../assets/images/navicons/orange.png'
import supman from '../assets/images/navicons/supman.png'
import colonel from '../assets/images/navicons/colonel.png'
import maskot from '../assets/images/navicons/maskot.png'
import sawyer from '../assets/images/navicons/sawyer.png'



import React, { lazy, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'



const Navigation = () => {
  const [show , setShow] = React.useState(false)

  return (
    <nav className='nav'> 
      <ul>
       <Link href="/page/Home"><Image className="logo"  src={logo}  alt="" /></Link>
       <Link href="/page/Home" className='nl transition ease-out duration-500' >PRODUCTS</Link>
       <Link href="/page/Home" className='nl transition ease-out duration-500'>FEATURED</Link>
       <Link href="/page/Home" className='nl transition ease-out duration-500'>FUNATICS!</Link>
      </ul>
      <ul>
        <div className='searchicont h-[1.8rem] w-[13rem] rounded-[24px] bg-white overflow-hidden'>
          <i className="fa-solid fa-magnifying-glass text-black text-lg mx-2"></i>
          <input type="text" placeholder='Search' className='border-none outline-none w-[10rem]' />
        </div>
        <li className='searchicontres'><i className="fa-solid fa-magnifying-glass text-white text-lg mx-2"></i></li>
        <li className='usericont'><i className="fa-solid fa-circle-user"></i></li> 
        <li className=''><i className="fa-solid fa-bag-shopping"></i></li> 
        <li className='globeicont flex items-center'><i className="fa-sharp fa-solid fa-earth-americas"></i><span className='text-sm p-2'>US</span> </li> 
        <li className='menu' onClick={()=>setShow(true)}><i class="fa-sharp fa-solid fa-bars"></i></li>
      </ul>
      {
        show?<SideNavigation closeNav={setShow} />:null
      }
    </nav>
  )
}


const SideNavigation = ({closeNav}) => {
  return (
    <div className='sidenavigation-active z-50'>
      <ul className='ul1'>
        <li><i className="fa-solid fa-circle-user"></i></li>
        <li onClick={()=> closeNav(false)}><i class="fa-regular fa-xmark x "></i></li>
      </ul>
      <ul className='ul2'>
        <li><a href="/products"> PRODUCTS </a> </li>
        <li><a href="/products"> FEATURED </a> </li>
        <li><a href="/products"> FUNATICS! </a> </li>
      </ul>
      <ul className='ul3'>
        <SideNavItem src={hero} label={"HEROES"} sublabel={"&Villains"}/>
        <SideNavItem src={orange} label={"ANIMATION"} sublabel={"&Cartoons"}/>
        <SideNavItem src={supman} label={"MOVIES"} sublabel={"&TV"}/>
        <SideNavItem src={colonel} label={"ICONS"} sublabel={"&Sports "}/>
        <SideNavItem src={maskot} label={"SHOP"} sublabel={"&By Type"}/>
        <SideNavItem src={sawyer} label={"SHOP ALL"} sublabel={""}/>

  
      </ul>
      <ul className='ul4 flex items-center justify-start'>
        <i className="fa-sharp fa-solid fa-earth-americas px-2"></i><span>UNITED STATES</span>
      </ul>
    </div>
  )
}

const SideNavItem = (props) => {
  return (
    <div className='flex py-3'>
      <Image className='h-[48px] pr-4' src={props.img} alt="" />
      <div className='grid grid-rows-2'>
        <div className='text-[18px] font-bold'>{props.label}</div>
        <div className=' '>{props.sublabel}</div>
      </div>
    </div>
  )
}



export default Navigation
