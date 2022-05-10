import PropTypes from 'prop-types';

const Overlay = ({ children, onClick }) => {
  const closeOverlayHandler = (e) => {
    if (e.target.className === 'overlay') {
      onClick();
    }
  };

  return (
    <div className="overlay" onClick={closeOverlayHandler}>
      {children}
    </div>
  );
};

Overlay.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Overlay;
