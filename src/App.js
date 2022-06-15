import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Products from 'pages/Products';
import Cart from 'pages/Cart';
import ProductDetail from 'pages/ProductDetail';
import NotFound from 'pages/NotFound';
import UserSettings from 'pages/UserSettings';
import Login from 'pages/Login';
import Layout from 'components/UI/Layout';
import Blog from 'pages/Blog';
import Contact from 'pages/Contact';
import ProtectedRoute from 'components/ProtectedRoute';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productCategory" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route
          path="/user/settings"
          element={
            <ProtectedRoute>
              <UserSettings />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
