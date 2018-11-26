import React from 'react';
import ReactDOM from 'react-dom';
import CartTotal from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartTotal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
