import Header from '../Header';
import Navbar from '../Navbar';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
