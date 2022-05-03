import PropTypes from 'prop-types';

const ButtonRound = ({
  icon,
  size,
  iconSize,
  position,
  right,
  top,
  info,
  onClick,
}) => {
  const customStyle = {
    width: size,
    height: size,
    fontSize: iconSize,
    position: position,
    right: right,
    top: top,
  };

  const infoFontSize = {
    fontSize: (parseFloat(size) / 3).toString() + 'px',
    top: (parseFloat(size) / 4).toString() + 'px',
  };

  return (
    <>
      <button
        onClick={onClick}
        className="button-round"
        style={customStyle}
        type="button"
      >
        <div className="button-round__icon">
          {icon}
          <div className="button-round__icon__info" style={infoFontSize}>
            {info}
          </div>
        </div>
      </button>
    </>
  );
};

ButtonRound.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  position: PropTypes.string,
  right: PropTypes.string,
  top: PropTypes.string,
};

ButtonRound.defaultProps = {
  width: '30px',
  height: '30px',
  iconSize: '15px',
  position: 'relative',
  right: '0',
  top: '0',
};

export default ButtonRound;
