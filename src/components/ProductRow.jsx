import React from 'react'

export default function ProductRow({eachProduct}) {
    const redStyle = {
        color: `red`
    }

  return (
    <tr>
        {eachProduct.inStock ? (<td>{eachProduct.name}</td>) 
        : (<td  style={redStyle}>{eachProduct.name}</td>)}
        <td>{eachProduct.price}</td>
    </tr>
            
  )
}
