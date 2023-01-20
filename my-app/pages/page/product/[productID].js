import React from 'react'
import { useRouter } from 'next/router'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'

import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import Image from 'next/image'
import newflag from '../../../assets/images/new.png'

 

const ProductDetails = () => {
  const [show , setShow] = React.useState(false)
  
  const showDesc = () => setShow(!show);

  const router = useRouter()
  const productID = router.query.productID
 

  const [products, setProducts]= useState([])
  useEffect(()=>{
      const fetchAllProducts = async()=>{
          try{
              const res = await axios.get("https://bluedragon-six.vercel.app/product/"+productID)
              setProducts(res.data)
          
          }catch(err){
              console.log(err)
          }
      }
      fetchAllProducts()
  },[]
  );

  return (
    <div className='mb-[4rem]'>
    
      {products.map(product=>(

      <section className='product mr-[6rem] mt-[2rem]'  >   
      <div className='productimage flex items-center justify-center relative  '> 
         <Image className='h-[35rem]' height={100} width={500} src={"/Assets/"+product.picture2} alt="" /> 
        <div className='h-[35rem] absolute top-0 hover:opacity-0 transition ease-in-out delay-100 bg-white'>
            <Image className='h-[35rem]' layout="fill" src={"/Productimages/"+product.picture2} alt="" /> 
        </div> 
       </div> 
   

  
      <div className='productdetails  '>
        <section>
          <h1 className='text-[2.5rem] font-[800] leading-10'>{product.product_name}</h1>
          <ul className='flex mt-[1.75rem]'>
              <Image width={100} height={0} src={newflag} alt="" />
              <li className='text-[1.5rem] px-2'>${product.price}</li>
          </ul>
          <div className='flex justify-between bg-black text-white p-[.5rem] mt-[1.75rem] w-[18rem] rounded-[24px]'>
              <button type="button" className='pl-2'><i className="fa-solid fa-angle-down"></i>1</button>
              <div className=' h-[2rem] w-[2px] bg-white'></div>
              <button type='button' className='text-[1.2rem] font-[500] pr-[3.8rem] '>ADD TO CART</button>
          </div> 
        </section>    
        <div onClick={showDesc}  className='productdropdown'>
          <span>Product Details</span>  
          <i  class="fa-solid fa-chevron-down"></i>
        </div>
      </div> 
  </section>
    ))}{productID}
  {
  show?<ProductDescription/>:null
  } 


  </div>
  )
}

const ProductDescription = (props) => {
  const router = useRouter()
  const productID = router.query.productID

  const [products, setProducts]= useState([])
  useEffect(()=>{
      const fetchAllProducts = async()=>{
          try{
              const res = await axios.get("https://bluedragon-six.vercel.app/product/"+productID)
              setProducts(res.data)
          }catch(err){
              console.log(err)
          }
      }
      fetchAllProducts()
  },[]);


  return (

  <div>
      {products.map(product=>(
        <div className='productdescription'>
        <div>
          {product.product_description}
        </div>
        <ul>
          <li><b>Item Number: </b> {product.product_no}</li>
          <li><b>Category: </b> {product.category}</li>
          <li><b>License: </b> {product.license}</li>
        </ul>
      </div>
      ))}
  </div>
  )
}

const ProductPage = () => {
 
  return (
    <div>
      <Navigation/>
        <ProductDetails/>
      <Footer/>
    </div>
  )
}

export default ProductPage
