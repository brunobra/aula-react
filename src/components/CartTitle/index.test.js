import React from 'react';
import ReactDOM from 'react-dom';
import CartTitle from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartTitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
