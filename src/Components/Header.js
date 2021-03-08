import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <Link to='/home'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/review'>Review</Link>
      <div className="cat-container">
        <Link to='/shop'>laptop</Link>
        <Link to='/shop'>Mobile</Link>
      </div>
    </div>
  );
};

export default Header;