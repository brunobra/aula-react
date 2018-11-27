import React from 'react';
import ReactDOM from 'react-dom';
import Product from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Product onDelete={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
