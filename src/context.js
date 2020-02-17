import React, { useReducer } from 'react';
import Checkout from './Checkout';
import pricingRules from './Checkout/pricingRules';
import productDefaults from './Checkout/productDefaults';
import {
  ADDITEM,
  REMOVEITEM,
  OPENPRODUCT,
  CLOSEPRODUCT
} from './common/constants/actions';

const checkout = new Checkout(pricingRules, productDefaults);

const initialState = {
  checkout,
  currency: '€',
  product: {}
};
const CheckoutContext = React.createContext(initialState);

let reducer = (state, action) => {
  switch (action.type) {
    case ADDITEM:
      checkout.scan(action.code);
      return { ...state, checkout };
    case REMOVEITEM:
      if (action.lastValue > 0) {
        checkout.unScan(action.code);
      }
      return { ...state, checkout };
    case OPENPRODUCT:
      const { code } = action;
      const product = checkout.getProductByCode(code);
      return { ...state, checkout, product: product || {} };
    case CLOSEPRODUCT:
      return { ...state, checkout, product: {} };
    default:
      return state;
  }
};

function CheckoutProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CheckoutContext.Provider>
  );
}
export { CheckoutContext, CheckoutProvider };
