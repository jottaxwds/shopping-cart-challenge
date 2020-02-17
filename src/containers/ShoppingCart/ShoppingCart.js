import React from 'react';
import PropTypes from 'prop-types';

import './ShoppingCart.scss';

import SectionTitle from './../../components/SectionTitle';
import ItemsList from './../ItemsList/ItemsList';

const ShoppingCart = ({ onShowDetails }) => {
  return (
    <section className="Products">
      <SectionTitle>Shopping Cart</SectionTitle>
      <ItemsList onShowDetails={onShowDetails} />
    </section>
  );
};

ShoppingCart.defaultProps = {
  onShowDetails: () => {}
};

ShoppingCart.propTypes = {
  onShowDetails: PropTypes.func
};

export default ShoppingCart;
