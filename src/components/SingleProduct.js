import React, { useContext } from 'react'
import {CartContext} from "../Context"

const SingleProduct = ({prod}) => {

   const {cart, setCart} = useContext(CartContext)
  
  return (
    <div className="prod-container">
      <img src={prod.image} alt={prod.title} width= "150px" className="cartImg"/>
      <div className='prodDesc'> 
        <span>{prod.title}</span> 
        <span>{prod.price} </span>
      </div>
      {cart.includes(prod) ? (
        <button
         className='remove'
          onClick={() =>{
            setCart(cart.filter((c) => c.id !== prod.id)) 
          }}>Remove From Cart</button>
      )  : (<button
          className='add'
          onClick= {() => setCart( [...cart, prod])}>
            Add To Cart
          </button>)} 
   
    </div>
  )
}

export default SingleProduct