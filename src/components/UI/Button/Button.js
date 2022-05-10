import PropTypes from 'prop-types';

const Button = ({ className, title, onClick }) => {
  return (
    <button onClick={onClick} className={className} type="button">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'button',
};

export default Button;
