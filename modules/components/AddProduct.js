import React from 'react'
import $ from 'jquery'
import { BASE_URL } from '../constants'

class AddProduct extends React.Component {
  handleSumbit(e) {
    e.preventDefault()
    //get all values
    let name = this.refs.name.value
    let description = this.refs.description.value
    let base_price = this.refs.base_price.value
    let quantity_on_hand = this.refs.quantity_on_hand.value

    //make ajax call
    $.ajax({
      url: `${BASE_URL}/products`,
      type: 'POST',
      data: { product: { name, description, base_price, quantity_on_hand } }
    }).done( product => {
      //notify home of change
      this.props.addProduct(product)
      this.refs.addForm.reset()  
    })
  
  }

  render() {
    return (
      <div className="col m4">
        <h4 className="center">Add Product</h4>
        <form ref="addForm" onSubmit={this.handleSumbit.bind(this)}>
          <input placeholder="name" ref="name" required={true} />
          <input placeholder="description" ref="description" />
          <input type="number" placeholder="price" ref="base_price" />
          <input type="number" placeholder="qty" ref="quantity_on_hand" />
          <button className="btn" type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default AddProduct
