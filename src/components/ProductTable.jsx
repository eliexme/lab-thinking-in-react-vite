import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({products, stockOnly}) {
    
  return (
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>

    <tbody>
        {products.map((eachProduct)=>{
            return (<ProductRow key={eachProduct.id} eachProduct={eachProduct}/>)
        })}
    </tbody>
</table>
    
  )
}
