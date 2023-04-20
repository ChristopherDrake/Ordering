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
      <div className="menu-item">
        <h2>Mozzarella Sticks</h2>
        <p>Mozzarella cheese with Marinara dip</p>
        <p>$5.99</p>
      </div>
      <div className="menu-item">
        <h2>Traditional wings and Boneless wings</h2>
        <p>BBQ, Buffalo, Lemon pepper, Mango habanero</p>
        <p>$10.99</p>
      </div>
      <div className="menu-item">
        <h2>House Salad</h2>
        <p>With your choice of dressing caesar, blue cheese, ranch, vinaigrette dressings</p>
        <p>$5.99</p>
      </div>
      <div className="menu-item">
        <h2>Soft drinks</h2>
        <p>Coke, Sprite, Fanta, Dr. Pepper</p>
        <p>$3.99</p>
      </div>
      <div className="menu-item">
        <h2>Combo Deals</h2>
      </div>
      <div className="menu-item">
        <h2>Cheesy Lovers Combo</h2>
        <p>Large cheese pizza, cheesy bread sticks, 2 liter soft drink</p>
        <p>$15.99</p>
      </div>
      <div className="menu-item">
        <h2>Meat Lovers Combo</h2>
        <p>Large meat lovers pizza, 12 piece wings, 2 liter soft drink</p>
        <p>$20.99</p>
      </div>
      <div className="menu-item">
        <h2>Veggie Lovers Combo</h2>
        <p>Large veggi lovers pizza, house salad, 2 liter soft drink</p>
        <p>$12.99</p>
      </div>
    </div>

  );
};

export default MenuPage;