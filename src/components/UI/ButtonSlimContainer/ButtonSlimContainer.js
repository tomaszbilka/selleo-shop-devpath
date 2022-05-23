import PropTypes from 'prop-types';

const ButtonSlimContainer = ({ children }) => {
  return <div className="btn-container">{children}</div>;
};

ButtonSlimContainer.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ButtonSlimContainer;
