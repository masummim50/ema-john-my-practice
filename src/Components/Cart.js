import React, { useContext } from 'react';
import { cartContext } from './Home';

const Cart = () => {
  const [price, setPrice, quantity, setQuantity] = useContext(cartContext)
  return (
    <div>
      <p>product selected:{quantity}</p>
      <p>price:{price}</p>
    </div>
  );
};

export default Cart;