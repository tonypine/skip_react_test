import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/button'
import CartDatastore from 'datastores/cartDatastore'

import 'components/productItem.css'

class ProductItem extends Component {
  displayName: 'ProductItem'

  static propTypes () {
    product: PropTypes.object.isRequired
  }

  render () {
    return (
      <div className="productItem clearfix">
        <div>{ this.props.product.name }</div>
        <Button onClick={this.onClickAddToCart.bind(this, this.props.product)} customClass="productItem-addToCart" text="Add to Cart" />
      </div>
    )
  }

  // EVENT HANDLERS
  onClickAddToCart(product, evt) {
    CartDatastore.addProduct(product)
  }
}

export default ProductItem
