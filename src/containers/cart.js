import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from 'components/input'
import Button from 'components/button'
import CartItem from 'components/cartItem'
import CartDatastore from 'datastores/cartDatastore'
import Redirect from "react-router-dom"

import 'containers/cart.css'

class Cart extends Component {
  displayName: 'Cart'

  constructor () {
    super()

    this.state = {
      products: CartDatastore.getCart()
    }
  }

  componentWillMount () {
    CartDatastore.subscribe(this.onCartDatastoreUpdate.bind(this))
  }

  componentWillUnmount () {
    CartDatastore.unsubscribe(this.onCartDatastoreUpdate)
  }

  render () {
    var cartProducts = this.state.products.length ?
      this.state.products.map((product) => {
        return <CartItem product={product} />
      })
    : (
      <div>Cart empty</div>
    )

    return (
      <div>
        <h1>Cart</h1>
        <div className="cartList">{ cartProducts }</div>
        <Button onClick={this.onClickPlaceOrder} text="Place Order"/>
      </div>
    )
  }

  // EVENT HANDLERS
  onCartDatastoreUpdate () {
    this._updateCart()
  }
  onClickPlaceOrder () {
    // TODO: Implement
  }

  // PRIVATE
  _updateCart () {
    this.setState({
        products: CartDatastore.getCart()
    })
  }
}

export default Cart
