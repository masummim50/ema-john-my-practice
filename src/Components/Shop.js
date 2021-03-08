import React, { useEffect, useState } from 'react';
import fakedata from '../fakeData'
import Product from './Product';
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const allProducts = fakedata;
    setProducts(allProducts);
    console.log(allProducts)
  },[])
  return (
    <div>
      {
        products.map(singleProduct => <Product singleProduct = {singleProduct}></Product>)
      }
    </div>
  );
};

export default Shop;