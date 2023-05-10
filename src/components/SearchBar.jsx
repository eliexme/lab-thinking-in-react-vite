import React from 'react'

export default function SearchBar({setSearchedItem}) {
    const handleChange = (event)=>{
        setSearchedItem(event.target.value)
    }

  return (
    <form>
        <input placeholder='search' onChange={handleChange} name='searchedItem'></input>
    </form>
  )
}
