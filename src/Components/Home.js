import React, { createContext, useState } from 'react';
import Cart from './Cart';
import Shop from './Shop';
export const cartContext = createContext();
const Home = () => {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
  return (
    <cartContext.Provider value={[price,setPrice,quantity,setQuantity]}>
      <div style={{display:'flex'}}>
      <Shop></Shop>
      <Cart></Cart>
      </div>
    </cartContext.Provider>
  );
};

export default Home;