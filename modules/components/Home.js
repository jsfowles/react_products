import React from 'react'
import $ from 'jquery'
import { BASE_URL } from '../constants'
import Products from './Products'
import AddProduct from './AddProduct'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { products: [] }
  }

  componentWillMount() {
    $.ajax({
      url: `${BASE_URL}/products`,
      type: 'GET'
    }).done( products => {
      this.setState({ products })
    })
  }

  deleteProduct(id) {
    event.preventDefault()
    $.ajax({
      url: `${BASE_URL}/products/${id}`,
      type: 'DELETE'
    }).done( () => {
      let products = this.state.products
      let index = products.findIndex( product => product.id === id )
      this.setState({
        products: [
          ...products.slice(0, index),
          ...products.slice(index + 1, products.length)
        ]
      })
    })
  }

  addProduct(product) {
    this.setState({ products: [...this.state.products, {...product} ] })
  }

  render() {
    return (
      <div className="row">
        <Products 
          products={this.state.products} 
          deleteProduct={this.deleteProduct.bind(this)}/>
        <AddProduct addProduct={this.addProduct.bind(this)} />
      </div>
    )
  }
}

export default Home

