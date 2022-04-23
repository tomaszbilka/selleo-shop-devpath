import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Basket from './pages/Basket';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import UserSettings from './pages/UserSettings';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/user/settings/:userId" element={<UserSettings />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
