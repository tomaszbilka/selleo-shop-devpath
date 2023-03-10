import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getCartModalStatus } from 'store/appState/selectors';
import { toggleCartModal } from 'store/appState';
import CartButton from 'components/CartButton';
import CartModal from 'components/Modals/CartModal/CartModal';
import Footer from 'components/UI/Footer';
import Header from 'components/UI/Header';
import Modal from 'components/Modals/Modal';
import Navbar from 'components/UI/Navbar';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isCartModalOpen = useSelector(getCartModalStatus);

  const openCartModalHandler = () => {
    dispatch(toggleCartModal(true));
  };

  const closeCartModalHandler = () => {
    dispatch(toggleCartModal(false));
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
      <ToastContainer position="bottom-center" />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
