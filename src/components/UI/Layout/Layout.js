import { useState } from 'react';
import Header from 'components/UI/Header';
import Navbar from 'components/UI/Navbar';
import Footer from 'components/UI/Footer';
import CartModal from 'components/Modals/CartModal';
import CartButton from 'components/CartButton';
import PropTypes from 'prop-types';
import Modal from 'components/Modals/Modal';

const Layout = ({ children }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const closeCartModalHandler = () => {
    setIsCartModalOpen(false);
  };

  const openCartModalHandler = () => {
    setIsCartModalOpen(true);
  };

  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      {isCartModalOpen && (
        <Modal
          element={<CartModal onClick={closeCartModalHandler} />}
          onClick={closeCartModalHandler}
        />
      )}
      <CartButton onClick={openCartModalHandler} />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
