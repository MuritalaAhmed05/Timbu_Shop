import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import ProductList from './component/Product';
import Cart from './component/Check';
import Footer from './component/Footer';
import CheckOut from './component/CheckOut';

const App = () => {
  const [cartItems, setCartItems] = React.useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== productId));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Header cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/CheckOut" element={<CheckOut cartItems={cartItems} clearCart={clearCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
