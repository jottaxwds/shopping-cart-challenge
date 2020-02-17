import React from 'react';
import { CheckoutProvider } from './context';

import { useToggle } from './common/utils/hooks';

import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import OrderSummary from './containers/OrderSummary/OrderSummary';

import ProductDetails from './containers/ProductDetails/ProductDetails';

import Modal from './components/Modal';

import './App.scss';

function App() {
  const [showModal, toggleModal] = useToggle(false);

  return (
    <div className="App">
      <CheckoutProvider>
        <Modal onCloseModal={toggleModal} showModal={showModal}>
          <ProductDetails onCloseDetails={toggleModal} />
        </Modal>
        <ShoppingCart onShowDetails={toggleModal} />
        <OrderSummary />
      </CheckoutProvider>
    </div>
  );
}

export default App;
