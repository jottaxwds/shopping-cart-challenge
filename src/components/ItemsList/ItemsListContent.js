import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.scss';

import StepInput from './../StepInput';

import { ADDITEM, REMOVEITEM } from './../../common/constants/actions';

const ItemsListContent = ({
  itemsInfo,
  currency,
  onShowDetails,
  onUpdateShoppingCart
}) => {
  return (
    <ul
      data-testid="itemslist-content"
      className="ItemsList ItemsList__content"
    >
      {itemsInfo.map(({ image, name, code, quantity, priceUnit }) => (
        <li key={`item_${code}`} className="ItemsList__row">
          <div className="Cell Product__col">
            <figure className="Product__figure">
              <img
                data-testid="product-image"
                src={image}
                alt={name}
                className="Product__image"
                onClick={() => {
                  onShowDetails(code);
                }}
              />
              <div className="Product__description">
                <h1
                  data-testid="product-title"
                  className="Product__title"
                  onClick={() => {
                    onShowDetails(code);
                  }}
                >
                  {name}
                </h1>
                <p className="Product__code">Product code {code}</p>
              </div>
            </figure>
          </div>
          <div className="Cell Quantity__col">
            <StepInput
              onIncrement={({ lastValue }) =>
                onUpdateShoppingCart({
                  type: ADDITEM,
                  code,
                  lastValue
                })
              }
              onDecrement={({ lastValue }) =>
                onUpdateShoppingCart({
                  type: REMOVEITEM,
                  code,
                  lastValue
                })
              }
              currentValue={quantity}
            />
          </div>
          <div className="Cell Price__col">
            <span className="Price__value">{priceUnit}</span>
            <span className="Price__currency">{currency}</span>
          </div>
          <div className="Cell Total__col">
            <span className="Price__value">{priceUnit * quantity}</span>
            <span className="Price__currency">{currency}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

ItemsListContent.propTypes = {
  itemsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      priceUnit: PropTypes.number.isRequired
    }).isRequired
  ),
  currency: PropTypes.string.isRequired,
  onUpdateShoppingCart: PropTypes.func.isRequired,
  onShowDetails: PropTypes.func.isRequired
};

export default ItemsListContent;
