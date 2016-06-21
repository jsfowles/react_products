import React from 'react'
import Product from './Product'

const Products = ({ products, deleteProduct }) => {
  
  let items = products.map( product => {
    return(<Product deleteProduct={deleteProduct} key={product.id} {...product}/>)
  })
  return (
    <div className="col m8">
      <h3 className="center">Products</h3>
      <ul style={{ maxHeight: '100vh', overflow: 'scroll' }} >
        {items}
      </ul>
    </div>
  )
}

export default Products
