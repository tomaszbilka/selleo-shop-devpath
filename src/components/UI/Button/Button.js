import PropTypes from 'prop-types';

const Button = ({ className, title, onClick, type, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.string,
};

Button.defaultProps = {
  className: 'button',
  type: 'button',
};

export default Button;
