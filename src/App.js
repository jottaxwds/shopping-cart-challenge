import React from 'react';
import { CheckoutProvider } from './context';

import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import OrderSummary from './containers/OrderSummary/OrderSummary';

import './App.scss';

function App() {
  return (
    <div className="App">
      <CheckoutProvider>
        <ShoppingCart />
        <OrderSummary />
      </CheckoutProvider>
    </div>
  );
}

export default App;
