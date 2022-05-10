import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Overlay from 'components/UI/Overlay';

const Modal = ({ element, onClick }) => {
  const modalElement = <Overlay onClick={onClick}>{element}</Overlay>;

  return ReactDOM.createPortal(modalElement, document.getElementById('modal'));
};

Modal.propTypes = {
  element: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
