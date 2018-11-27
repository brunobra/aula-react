import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import {Cart, CartFooter, CartHeader, Product} from '../src/components';

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Cart', module)
  .add('default', () => <Cart />)

storiesOf('CartHeader', module)
  .add('default', () => <CartHeader />)

storiesOf('CartFooter', module)
  .add('default', () => <CartFooter />)

storiesOf('Product', module)
  .add('default', () => <Product />)