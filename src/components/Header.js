import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import {CartContext} from '../Context'




const  Header = () => {
  const {cart} =useContext(CartContext)
  return (<>
  <div className= "header">Problem-Solving Code</div>
  <div className= 'nav'>
    <ul>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/cart'>Cart :{cart.length} </Link>
      </li>
    </ul>
  </div>
  
  </>
    
  )
}

export default Header