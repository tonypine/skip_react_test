import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import CartDatastore from 'datastores/cartDatastore'

import 'components/cartItem.css'

class CartItem extends Component {
  displayName: 'cartItem'

  static propTypes () {
    product: PropTypes.object.isRequired
  }

  render () {
    return (
      <div className="cartItem clearfix">
        <div>{ this.props.product.name }</div>
        <Button onClick={this.onClickRemoveFromCart.bind(this, this.props.product)} customClass="cartItem-removeFromCart" text="Remove" />
      </div>
    )
  }

  // EVENT HANDLERS
  onClickRemoveFromCart(product, evt) {
    CartDatastore.removeProduct(product)
  }
}

export default CartItem
