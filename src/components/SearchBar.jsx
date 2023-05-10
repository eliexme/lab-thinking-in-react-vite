import React from 'react'

export default function SearchBar({setSearchedItem, setStockOnly, stockOnly}) {
    
    const handleChange = (event)=>{
        setSearchedItem(event.target.value)
    }

    const handleCheck = (event) =>{
      setStockOnly(event.target.checked)
    }

  return (
    <form>
      <div>
        <input placeholder='search' onChange={handleChange} name='searchedItem'></input>
      </div>

      <div>
        <label>Show stock only</label>
        <input type='checkbox' onChange={handleCheck} name='stockOnly' checked={stockOnly}></input>
      </div>

    </form>
  )
}
