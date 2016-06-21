import React from 'react'
import { BASE_URL } from '../constants'
import $ from 'jquery'
import { Link } from 'react-router'

class ShowProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: { name: '', description: '', base_price: 0, quantity_on_hand: 0 },
      edit: false
    }
  }

  componentWillMount() {
    let id = this.props.params.id
    $.ajax({
      url: `${BASE_URL}/products/${id}`,
      type: 'GET'
    }).done( product => {
      this.setState({ product })
    })
  }

  show() {
    let product = this.state.product
    return(
      <div className="container row">
        <Link to="/">Back</Link>
        <h2 className="center">{product.name}</h2>
        <h3 className="col m3 offset-m3">Description:</h3>
        <h3 className="col m6">{product.description}</h3>
        <h3 className="col m3 offset-m3">Price:</h3>
        <h3 className="col m6">${product.base_price}</h3>
        <h3 className="col m3 offset-m3">Qty:</h3>
        <h3 className="col m6">{product.quanity_on_hand}</h3>
        <div classname="center">
          <button className="btn" onClick={this.toggleEdit.bind(this)}>Edit</button>
        </div>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    let name = this.refs.name.value
    let description = this.refs.description.value
    let base_price = this.refs.base_price.value
    let quantity_on_hand = this.refs.quantity_on_hand.value
    $.ajax({
      url: `${BASE_URL}/products/${this.state.product.id}`,
      type: 'PUT',
      data: { product: { name, description, base_price, quantity_on_hand }}
    }).done( product => {
      this.setState({ product, edit: false })
    })

  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit })
  }

  edit() {
    let product = this.state.product
    return(
      <form className="container" ref="editProduct" onSubmit={this.handleSubmit.bind(this)}>
        <input ref="name" placeholder="name" required={true} defaultValue={product.name} />
        <input ref="description" placeholder="description" defaultValue={product.description} />
        <input ref="base_price" type="number" placeholder="price" defaultValue={product.base_price} />
        <input ref="quantity_on_hand" type="number" placeholder="qty" defaultValue={product.quantity_on_hand} />
        <button type="button" className="btn red" onClick={this.toggleEdit.bind(this)}>Cancel</button>
        <button type="submit" className="btn">Save</button>
      </form>
    )
  }

  render() {
    if (this.state.edit)
      return this.edit()
    else
      return this.show()
  }

}

export default ShowProduct
