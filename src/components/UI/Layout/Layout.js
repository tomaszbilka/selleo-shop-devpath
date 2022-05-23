import { useDispatch, useSelector } from 'react-redux';
import { openCartModal, closeCartModal } from 'store/appState';
import { getCartModalStatus } from 'store/appState/selectors';
import Header from 'components/UI/Header';
import Navbar from 'components/UI/Navbar';
import Footer from 'components/UI/Footer';
import CartModal from 'components/Modals/CartModal/CartModal';
import CartButton from 'components/CartButton';
import PropTypes from 'prop-types';
import Modal from 'components/Modals/Modal';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isCartModalOpen = useSelector(getCartModalStatus);

  const closeCartModalHandler = () => {
    dispatch(closeCartModal());
  };

  const openCartModalHandler = () => {
    dispatch(openCartModal());
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
