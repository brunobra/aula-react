import React from 'react';
import ReactDOM from 'react-dom';
import CartFooter from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartFooter onAddProduct={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
