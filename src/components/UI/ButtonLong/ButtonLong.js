import PropTypes from 'prop-types';

const ButtonLong = ({ title, onClick, icon }) => {
  return (
    <div className="buttonLong">
      <button onClick={onClick} type="button" className="buttonLong__btn">
        <div>{icon}</div>
        <p className="buttonLong__btn__title">{title}</p>
      </button>
    </div>
  );
};

ButtonLong.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLong;
