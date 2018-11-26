import React from 'react';
import ReactDOM from 'react-dom';
import ProductPrice from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductPrice />, div);
  ReactDOM.unmountComponentAtNode(div);
});
