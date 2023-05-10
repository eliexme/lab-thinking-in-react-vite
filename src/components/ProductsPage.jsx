import React from 'react';
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchedItem, setSearchedItem] = useState('')
  const [stockOnly, setStockOnly] = useState(false)

  const searchedItemArr = products.filter((eachProduct)=>{
    return(eachProduct.name.toLowerCase().includes(searchedItem.toLowerCase()))
  })

  const filteredArr = stockOnly? searchedItemArr.filter((eachItem)=>{
    return (eachItem.inStock)
  }) : searchedItemArr

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar setSearchedItem= {setSearchedItem}  setStockOnly={setStockOnly}/>
        <ProductTable products={filteredArr} stockOnly={stockOnly}/>
      </div>    
  )
}

export default ProductsPage