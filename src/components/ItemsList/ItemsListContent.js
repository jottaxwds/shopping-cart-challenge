import React from 'react';
import PropTypes from 'prop-types';

import './ItemList.scss';

import StepInput from './../StepInput';

const CHANGE = 'UPDATE';
const ADDITEM = 'ADDITEM';
const REMOVEITEM = 'REMOVEITEM';

const ItemsListContent = ({
  itemsInfo,
  onShowDetails,
  onUpdateShoppingCart
}) => {
  return (
    <ul
      data-testid="itemslist-content"
      className="ItemsList ItemsList__content"
    >
      {itemsInfo.map(
        ({
          image,
          name,
          code,
          quantity,
          priceValueUnit,
          priceCurrencyUnit,
          total
        }) => (
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
                onIncrement={() =>
                  onUpdateShoppingCart({ type: ADDITEM, code })
                }
                onDecrement={() =>
                  onUpdateShoppingCart({ type: REMOVEITEM, code })
                }
                onChange={({ target: value }) =>
                  onUpdateShoppingCart({ type: CHANGE, value, code })
                }
                currentValue={quantity}
              />
            </div>
            <div className="Cell Price__col">
              <span className="Price__value">{priceValueUnit}</span>
              <span className="Price__currency">{priceCurrencyUnit}</span>
            </div>
            <div className="Cell Total__col">
              <span className="Price__value">{total ? total : 0}</span>
              <span className="Price__currency">{priceCurrencyUnit}</span>
            </div>
          </li>
        )
      )}
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
      priceValueUnit: PropTypes.number.isRequired,
      priceCurrencyUnit: PropTypes.string.isRequired,
      total: PropTypes.number
    }).isRequired
  ),
  onUpdateShoppingCart: PropTypes.func.isRequired,
  onShowDetails: PropTypes.func.isRequired
};

export default ItemsListContent;
