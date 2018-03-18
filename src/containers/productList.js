import React, { Component } from 'react'
import ProductDatastore from 'datastores/productDatastore'
import ProductItem from 'components/productItem'

import 'containers/productList.css'

class ProductList extends Component {
  displayName: 'ProductList'

  constructor () {
    super()

    this.state = {
      products: undefined
    }
  }

  componentWillMount () {
    ProductDatastore.subscribe(this.onProductDatastoreUpdate.bind(this))
    ProductDatastore.fetchProducts()
  }

  componentWillUnmount () {
    ProductDatastore.unsubscribe(this.onProductDatastoreUpdate.bind(this))
  }

  render () {
    var listProducts

    if (typeof this.state.products === 'object') {
      listProducts = this.state.products.length ?
        this.state.products.map((product) => {
          return <ProductItem key={product.id} product={product} />
        })
        : <div>No products</div>
    } else {
      listProducts = <div>Loading products ...</div>
    }

    return (
      <div>
        <h1>Products</h1>
        <div className="productList">{ listProducts }</div>
      </div>
    )
  }

  // EVENT HANDLERS
  onProductDatastoreUpdate () {
    this._updateMessages()
  }

  // PRIVATE
  _updateMessages () {
    this.setState({
        products: ProductDatastore.getProducts()
    })
  }
}

export default ProductList
