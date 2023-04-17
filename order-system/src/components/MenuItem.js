import React from 'react';

function MenuItem(props) {
  const { product, handleAddToCart } = props;

  const handleClick = () => {
    handleAddToCart(product);
  };

  return (
    <div className="menu-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${(product.price / 100).toFixed(2)}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default MenuItem;
