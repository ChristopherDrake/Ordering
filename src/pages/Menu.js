import React, { useState } from 'react';
import Items from '../components/Items.js';
import Cart from '../components/Cart.js';
import MenuItem from '../components/MenuItem.js';
import './Menu.css'

function MenuPage() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  }

  return (
    <div className="menu-page">
      <div className="menu-items">
        {Items.products.map((product) => (
          <MenuItem key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="cart">
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
}

export default MenuPage;
