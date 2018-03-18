import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from 'containers/productList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductList />, div);
});
