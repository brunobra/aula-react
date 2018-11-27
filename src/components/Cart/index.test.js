import React from 'react';
import ReactDOM from 'react-dom';
import Cart from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart onDeleteProduct={() => {}} onAddProduct={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
