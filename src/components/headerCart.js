import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import CartDatastore from 'datastores/cartDatastore'

import 'components/headerCart.css'

class HeaderCart extends Component {
  displayName: 'HeaderCart'

  constructor () {
    super()
    this.state = {
      cartItems: this._getCartItems()
    }
  }

  componentWillMount () {
    CartDatastore.subscribe(this.onCartDatastoreUpdate.bind(this))
  }

  componentWillUnmount () {
    CartDatastore.unsubscribe(this.onCartDatastoreUpdate.bind(this))
  }

  render() {
    const cartCount = this.state.cartItems.length
    return (
      <div className="app-headerCart">
        <Link className="app-headerCartButton" to="/cart">
          <i className="fa fa-shopping-cart"></i>
          { cartCount > 0 &&
            <div className="app-headerCartCounter">{cartCount}</div>
          }
        </Link>
      </div>
    )
  }

  // EVENT HANDLERS
  onCartDatastoreUpdate () {
    this.setState({
      cartItems: this._getCartItems()
    })
  }
  onClickCart () {
    // TODO: Navigate to cart index
  }

  // PRIVATE
  _getCartItems () {
    return CartDatastore.getCart()
  }
}

export default HeaderCart
