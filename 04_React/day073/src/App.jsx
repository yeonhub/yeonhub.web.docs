import React from 'react';
import Customer from './customer/Customer';
import './customer/customer.scss'
import './cart/cart.scss'
import './assets/css/reset.css'
import Cart from './cart/Cart';

const App = () => {
  return (
    <div>
      {/* <Customer /> */}
      <Cart/>
    </div>
  );
};

export default App;