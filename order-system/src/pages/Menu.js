import React from 'react';

const MenuPage = () => {
  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-item">
        <h2>Pepperoni Pizza</h2>
        <p>Tomato sauce, mozzarella cheese, pepperoni</p>
        <p>$12.99</p>
      </div>
      <div className="menu-item">
        <h2>Margherita Pizza</h2>
        <p>Tomato sauce, mozzarella cheese, fresh basil</p>
        <p>$10.99</p>
      </div>
      <div className="menu-item">
        <h2>Hawaiian Pizza</h2>
        <p>Tomato sauce, mozzarella cheese, ham, pineapple</p>
        <p>$13.99</p>
      </div>
    </div>
  );
};

export default MenuPage;