import React from 'react'
import { Link } from 'react-router'

const Product = ({ id, base_price, description, name, quantity_on_hand, deleteProduct }) => (
  <li>
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{name}</span>
        <table className="table">
          <thead>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </thead>
          <tbody>
            <tr>
              <td>{description}</td>
              <td>${base_price}</td>
              <td>{quantity_on_hand}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card-action">
        <Link to={`/products/${id}`}>Show</Link>
        <a onClick={() => deleteProduct(id)} href="#">Delete</a>
      </div>
    </div>
  </li>  
)

export default Product 
