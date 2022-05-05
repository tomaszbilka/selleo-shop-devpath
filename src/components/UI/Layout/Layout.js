import { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import CartModal from '../../CartModal';
import CartButton from 'components/CartButton';

const Layout = ({ children }) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const closeCartModalHandler = () => {
    setIsCartModalOpen(false);
  };

  const openCartModalHandler = () => {
    setIsCartModalOpen(true);
  };

  const cartModal = ReactDOM.createPortal(
    <CartModal onClick={closeCartModalHandler} />,
    document.getElementById('modal')
  );

  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      {isCartModalOpen && cartModal}
      <CartButton onClick={openCartModalHandler} />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
