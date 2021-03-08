import React, { useContext } from 'react';
import { cartContext } from './Home';

const Product = (props) => {
  const [price, setPrice, quantity, setQuantity] = useContext(cartContext);
  const handleClick = () => {
    setPrice(price + props.singleProduct.price)
    setQuantity(quantity+1)
  }
  return (
    <div>
      <h2>{props.singleProduct.name}</h2>
      <p>price: {props.singleProduct.price}</p>
      <button onClick={handleClick}>add this product</button>
    </div>
  );
};

export default Product;