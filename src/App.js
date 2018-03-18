import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import SignUpForm from 'containers/signUpForm'
import ProductList from 'containers/productList'
import Cart from 'containers/cart'
import HeaderCart from 'components/headerCart'
import CartDatastore from 'datastores/cartDatastore'
import 'App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="appHeader">
            SKIP the Dishes Test
            <ul className="appHeader-menu">
              <li>
                <Link  to="/products">Products</Link>
              </li>
            </ul>
            <HeaderCart />
          </header>
          <div className="app-mainWrapper">
            <Route exact path="/products" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/signup" component={SignUpForm} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
