import EventEmitter from 'events'
import ProductApi from 'api/productApi'

const emitter = new EventEmitter()

var products = []

class ProductDatastore {
  static getProducts () {
    console.log(products)
    return products
  }

  static fetchProducts () {
    ProductApi.get().then((response) => {
      products = response
      emitter.emit('update')
    })
  }

  static subscribe (callback) {
    emitter.addListener('update', callback)
  }

  static unsubscribe (callback) {
    emitter.removeListener('update', callback)
  }
}

export default ProductDatastore
