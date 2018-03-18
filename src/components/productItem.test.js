import React from 'react';
import ReactDOM from 'react-dom';
import ProductItem from 'components/productItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const product = {
    name: 'Product'
  }
  ReactDOM.render(<ProductItem product={product} />, div);
});
