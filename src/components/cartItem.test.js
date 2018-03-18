import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from 'components/cartItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const product = {
    name: 'Product'
  }
  ReactDOM.render(<CartItem product={product} />, div);
});
