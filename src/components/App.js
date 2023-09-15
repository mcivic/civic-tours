import React from"react"
import Header from './Header'
import './style.css'
import SearchBar from './SearchBar/SearchBar' 
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './Home'
import Cart from './Cart'



const App = () => {

 

    return (
      
        <BrowserRouter>
          
          <div className="container">
            { <SearchBar/> }
             <Header/>
          </div>

           <Routes>
             <Route  path= "/home" exact element= {<Home/>}/> 
               
              

             <Route path= "/cart" element= {<Cart/>}/>
             
           </Routes>
          </BrowserRouter>
        
         

    )
}

export default App