import React, {useState}   from 'react'
import data from './products'
import SingleProduct from './SingleProduct'




function Home() {
   const [products] =useState(data)
   
 
 
  return (
    <div className='home'>
     {products.map((prod) => (
       <SingleProduct prod={prod} key={prod.id}   />
     ))}
      </div>
  )
}

export default Home