import React from 'react';

import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import OrderSummary from './containers/OrderSummary/OrderSummary';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ShoppingCart />
      <OrderSummary />
    </div>
  );
}

export default App;
