import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchedItem, setSearchedItem] = useState('')

  const searchedItemArr = products.filter((eachProduct)=>{
    return(eachProduct.name.toLowerCase().includes(searchedItem.toLowerCase()))
  })

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar setSearchedItem= {setSearchedItem}/>
        <ProductTable products={searchedItemArr}/>
      </div>    
  )
}

export default ProductsPage