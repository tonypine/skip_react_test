import React from 'react';
import ReactDOM from 'react-dom';
import HeaderCart from 'components/headerCart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderCart  />, div);
});
