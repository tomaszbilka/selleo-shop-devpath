import PropTypes from 'prop-types';

const Button = ({ title, width, onClick }) => {
  const customStyle = {
    width: width,
  };

  return (
    <button
      onClick={onClick}
      className="button"
      style={customStyle}
      type="button"
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  width: '150px',
};

export default Button;
