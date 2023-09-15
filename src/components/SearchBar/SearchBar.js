import React, {useState} from "react"
import "./SearchBar.css"

const products = [
    "tooth paste",
    "tooth brush",
    "mouth wash",
    "dental floss",
    "mouth gaurd",
    "big coke",
    "small coke",
    "big gala"

]

const SearchBar = () => {
    const  [searchValue, setSearchValue] = useState("")
    
    const handleInputChange =(event) =>{
        setSearchValue(event.target.value)

    }
    const handleClearClick = () => {
        setSearchValue("")
    }

    console.log(
        products.map((product) => {
            return product.toUpperCase()
        })
    )
    const shouldDisplayButton = searchValue.length > 0
    console.log(shouldDisplayButton)
    return <div>
        <input type="text" value={searchValue} onChange={handleInputChange}/>
        {shouldDisplayButton && <button onClick={handleClearClick}>CLEAR</button>}
        
       
    </div>
}
export default SearchBar