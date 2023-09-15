import React, {useContext, useState, useEffect } from 'react'
import SingleProduct from './SingleProduct'
import {CartContext} from '../Context'

const Cart = ({prod}) => {

  const [ total, setTotal] = useState()  

  const {cart } = useContext(CartContext)

  useEffect(() => {

    
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);   
  
    
  return (
    <div className='cart'>

      <div className="cartInfoWrapper" >
         <div className='cart-info'>
           <span className='empty'>{cart.length < 1 && "Your Cart Is Empty" }</span>
            <br/>
           <span className='cartTitle'> My  Cart</span>
            <br/>
           <span className='total'> Total : N {total} </span>
         </div>
          <div className='cartItems'>
           {cart.map((prod) => (
           <SingleProduct prod={prod} key= {prod.id} />
           ))}

          </div>
      </div>
    </div>
  )
}

export default Cart