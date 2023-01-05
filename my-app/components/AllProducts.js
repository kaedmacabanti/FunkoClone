import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import flag from '../assets/images/flag.png'
import Image from 'next/image'
import Link from 'next/link'


const AllProducts = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        const fetchAllProducts = async()=>{
            try{
                // const res = await axios.get("http://localhost:8080/products")  
                const res = await axios.get("http://localhost:8000/")
                setProducts(res.data)
                console.log(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProducts()
     
    },[]);

    return (
    
    <div className='mainproductcontainer w-full'>

        
      {products.map(product=>(
        <Link to={`/products/details/${product.id}`}>
     
            <div className='flex flex-col items-center  w-[15rem] h-[435px] px-2 pb-2  bg-white m-2 rounded-[10px]  ' key={product.id}>
           
            <div className='w-full bg-slate-400 h-[0rem]'><Image src={flag} className='h-[4.5rem] z-20 absolute'/></div>
                <div className='img h-[50%] relative   '>
                    
                    <Image  className='h-[100%]' src={"Productimages/"+product.img_b} alt="" />
                    <div className='h-[100%] w-[100%] absolute top-0 hover:hidden transition ease-in-out delay-100 bg-white'>
                        <Image  className='h-[100%]' src={"Productimages/"+product.img_a} alt="" />
                    </div>
                </div>
                <div className='description mt-4 w-[90%]'>
                    <ul>
                        <li className='my-1'>POP! ID:{product.id}</li>
                        <li className='cardtitle h-[40px]   font-monts leading-4'>{product.product_name}</li>
                        <li className='my-3'>{product.price} $</li>
                    </ul>             
                </div>
                <button type="button" className='cardbtn mt-2  w-[80%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '> ADD TO CART </button>      
            </div>
        </Link>
      ))}
    </div>
  )
}


export const NewReleases = () => {
  const [products, setProducts]= useState([])
  const productsToShow = 4  ;

  useEffect(()=>{
      const fetchAllProducts = async()=>{
          try{
              const res = await axios.get("http://localhost:8080/products")
              setProducts(res.data)
          }catch(err){
              console.log(err)
          }
      }
      fetchAllProducts()
   
  },[]);

  return (
    <div className='mainproductcontainerNR w-full p-[4rem]'>
    {products.slice(products, productsToShow)
    .map(product => (
    <Link to={`/products/details/${product.id}`}>
    <div className='productcontainer relative w-[20rem] h-[500px] p-3' key={product.id}>
    <div className='w-full bg-slate-400 h-[0rem]'><Image src={flag} className='h-[4.5rem] z-20 absolute'/></div>
      <div className='img h-[70%] relative   '>
         <Image  className='h-[100%] ' src={"Productimages/"+product.img_b} alt="" />
         <div className='h-[100%] w-[100%] absolute top-0 hover:hidden transition ease-in-out delay-100 bg-white'>
            <Image  className='h-[100%]' src={"Productimages/"+product.img_a} alt="" />
         </div>
      </div>
 
        <div className='description'>
          <ul>
              <li className='my-1'>POP!</li>
              <li className='cardtitle h-[40px] font-monts leading-4'>{product.product_name}</li>
              <li className=''>$ {product.price}</li>
          </ul>
        
          <button type="button" className='cardbtn mt-2  w-[100%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '><Link to={`/products/details/${product.id}`}>ADD TO CART</Link>  </button> 
      </div>
    </div>
    </Link>
    ))}
 
  </div>
)
}


export default AllProducts 
 