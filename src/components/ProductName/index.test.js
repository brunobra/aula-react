import React from 'react';
import ReactDOM from 'react-dom';
import ProductName from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductName />, div);
  ReactDOM.unmountComponentAtNode(div);
});
