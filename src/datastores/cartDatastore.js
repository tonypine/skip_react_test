import EventEmitter from 'events'

const emitter = new EventEmitter()

var cartItems = []

class CartDatastore {
  static getCart () {
    return cartItems
  }

  static subscribe (callback) {
    emitter.addListener('update', callback)
  }

  static unsubscribe (callback) {
    emitter.removeListener('update', callback)
  }

  static addProduct (product) {
    cartItems.push(product)
    emitter.emit('update')
  }

  static removeProduct (product) {
    var index = cartItems.indexOf(product)
    cartItems.splice(index, 1)
    emitter.emit('update')
  }
}

export default CartDatastore
