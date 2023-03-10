import React from 'react'
import flag from '../assets/images/flag.png'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const NewReleases = () => {
  const [products, setProducts]= useState([])
  const productsToShow = 4  ;

  useEffect(()=>{
      const fetchAllProducts = async()=>{
          try{
              const res = await axios.get("https://bluedragon-six.vercel.app/all_products")
              setProducts(res.data)
              console.log(products)
          }catch(err){
              console.log(err)
          }
      }
      fetchAllProducts()
   
  },[]);

  return (
    <div className='display flex justify-center py-[2rem] '>
    {products.map(product=> (
    <Link href={`/page/product/${product.id}`} key={product.id}> 
    <div className='productcontainer relative w-[20rem] h-[500px] p-3'  >
        <div className='w-full bg-slate-400 h-[0rem]'><Image src={flag} width={0} height={100} className='h-[4.5rem] z-20 absolute'/></div>
        <div className='img h-[70%] relative   '>
            <div className='h-[100%]'>
               <Image layout='fill' src={"/Assets/"+product.picture2} alt="" />
            </div>
             <div className='h-[100%] w-[100%] absolute top-0 hover:opacity-0 transition ease-in-out delay-00 '>
                <div className='h-[100%]'>
                  <Image layout='fill' src={"/Assets/"+product.picture1} alt="" />
                </div>
            </div>
        </div>
    
            <div className='description'>
            <ul>
                <li className='my-1'>POP!</li>
                <li className='cardtitle h-[40px] font-monts leading-4'>{product.product_name}</li>
                <li className=''>$ {product.price}</li>
            </ul>
            
            <button type="button" className='cardbtn mt-2  w-[100%] h-[2.5rem]  rounded-[28px] bg-[#f3f3f7] '>ADD TO CART </button> 
        </div>
    </div>
    </Link>

    ))}
 
  </div>
)
}

 
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
    
    <div className='display flex justify-center w-full'>
      {products.map(product=>(
            <div className='flex flex-col items-center  w-[15rem] h-[435px] px-2 pb-2  bg-white m-2 rounded-[10px]' key={product.id}>
            <div className='w-full bg-slate-400 h-[0rem]'><Image src={flag} height={100} width={0} alt="" className='h-[4.5rem] z-20 absolute'/></div>
                <div className='img h-[50%] relative   '>
                    <div className='h-[100%] bg-slate-500'>
                        <Image layout='fill' src={"/Assets/"+product.picture2} alt="" />
                    </div>
                     <div className='h-[100%] w-[100%] absolute top-0 hover:hidden transition ease-in-out delay-100  '>
                        <div  className='h-[100%]  bg-slate-500' >
                            <Image layout='fill' src={"/Assets/"+product.picture1} alt="" />
                        </div>
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
      ))}
    </div>
  )
}


export default NewReleases
