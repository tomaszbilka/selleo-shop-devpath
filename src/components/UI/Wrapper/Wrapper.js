import PropTypes from 'prop-types';

const Wrapper = ({ children }) => {
  return <section className="show-container">{children}</section>;
};

Wrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Wrapper;
