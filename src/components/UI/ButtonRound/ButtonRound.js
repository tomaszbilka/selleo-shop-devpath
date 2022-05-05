import PropTypes from 'prop-types';

const ButtonRound = ({ icon, className, info, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={className} type="button">
        <div className="button-round__icon">
          {icon}
          <div className="button-round__icon__info">{info}</div>
        </div>
      </button>
    </>
  );
};

ButtonRound.propTypes = {
  icon: PropTypes.element.isRequired,
  className: PropTypes.string,
  info: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ButtonRound.defaultProps = {
  info: 'click me',
  className: 'button-round',
};

export default ButtonRound;
