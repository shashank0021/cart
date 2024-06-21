
import React, { useState } from 'react';
import './App.css';

function App() {
  const initialProducts = [
    { id: 1, name: "iPhone 11", price: 1000, quantity: 1 },
    { id: 2, name: "Samsung Galaxy S21", price: 800, quantity: 1 },
    { id: 3, name: "Google Pixel 5", price: 700, quantity: 1 },
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleIncrement = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };

  const handleDecrement = (id) => {
    setProducts(products.map(product => 
      product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
    ));
  };

  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);

  return (
    <div className='container'>
      {products.map(product => (
        <div className='child' key={product.id}>
          <h1>{product.name}</h1>
          <h1>Price: ${product.price}</h1>
          <h3>Quantity: {product.quantity}</h3>
          <button onClick={() => handleIncrement(product.id)}>+</button>
          <button onClick={() => handleDecrement(product.id)} disabled={product.quantity <= 0}>-</button>
          <h3>Total Price: ${product.price * product.quantity}</h3>
        </div>
      ))}
      <div style={{ width: '400px', border: '2px solid grey', marginTop: '20px' }}>
        <h1>Order Details</h1>
        {totalQuantity > 0 ? (
          <h3>Total Price: ${total}</h3>
        ) : (
          <h3>Cart is empty. Add items to the cart.</h3>
        )}
      </div>
    </div>
  );
}

export default App;
