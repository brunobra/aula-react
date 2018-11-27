import React from 'react';
import PropTypes from 'prop-types';
import './CartFooter.css';
import './CartFooterForm.css';
import './CartFooterInput.css';
import './CartFooterButton.css';

class CartFooter extends React.Component {
  state = {
    productName: '',
    productPrice: 0
  }

  handleNameChange(e) {
    this.setState({
      productName: e.target.value
    });
  }

  handlePriceChange(e) {
    this.setState({
      productPrice: parseInt(e.target.value)
    });
  }

  handleAddProduct(e) {
    e.preventDefault();
 
    if (this.state.productName && this.state.productPrice) {
      const product = {
        id: Math.floor(Math.random() * 1000) + 1,
        name: this.state.productName,
        price: this.state.productPrice
      }
  
      this.props.onAddProduct(product);
      this.productName.value = "";
      this.productPrice.value = null;
      this.productName.focus();
    }
  }

  render () {
    return (
      <div className="CartFooter">
        <form
          className="CartFooterForm"
          onSubmit={this.handleAddProduct.bind(this)}
        >
          <input
            ref={c => this.productName = c}
            className="CartFooterInput"
            placeholder="Nome"
            onChange={this.handleNameChange.bind(this)}
          />
          <input
            ref={c => this.productPrice = c}
            type="number"
            className="CartFooterInput"
            placeholder="Preço"
            max={1000}
            onChange={this.handlePriceChange.bind(this)}
          />
          <button type="submit" className="CartFooterButton">
            Adicionar
          </button>
        </form>
      </div>
    );
  }
}

CartFooter.propTypes = {
  onAddProduct: PropTypes.func.isRequired
};

export default CartFooter;
