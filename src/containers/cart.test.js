import React from 'react';
import ReactDOM from 'react-dom';
import Cart from 'containers/cart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart />, div);
});
