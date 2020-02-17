import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './ProductDetails.scss';

import { CheckoutContext } from './../../context';

import { ADDITEM } from './../../common/constants/actions';

import Button from './../../components/Button';

const ProductDetails = ({ onCloseDetails }) => {
  const {
    state: {
      currency,
      product: { name, description, image, priceUnit, code }
    },
    dispatch
  } = useContext(CheckoutContext);

  var sectionStyle = {
    backgroundImage: `url(' ${image ? image : ''}')`
  };

  const addToCart = ({ type, code }) => {
    dispatch({ type, code });
    onCloseDetails();
  };

  return (
    <>
      <section
        data-testid="product-image-detail"
        className="ProductDetails__section"
        style={sectionStyle}
      ></section>
      <aside className="ProductDetails__aside">
        <ul className="ProductDetails__list">
          <li className="ProductDetails__title">
            <span> {name || ''} </span>
            <span> {priceUnit ? `${priceUnit} ${currency}` : ''}</span>
          </li>
          <li className="ProductDetails__description">{description || ''}</li>
          <li className="ProductDetails__code">Product code {code || ''}</li>
          <li>
            <Button
              onClick={() => addToCart({ type: ADDITEM, code })}
              extraClassNames={'Button__submit'}
            >
              Add to cart
            </Button>
          </li>
        </ul>
      </aside>
    </>
  );
};

ProductDetails.defaultProps = {
  onCloseDetails: () => {}
};

ProductDetails.propTypes = {
  onCloseDetails: PropTypes.func
};

export default ProductDetails;
