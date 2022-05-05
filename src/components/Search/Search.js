import PropTypes from 'prop-types';
import Overlay from '../UI/Overlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({ closeModal }) => {
  return (
    <Overlay onClick={closeModal}>
      <div className="search">
        <div className="search__controls">
          <input
            className="search__controls__input"
            type="text"
            placeholder="Enter your search keyword..."
          />
          <button className="search__controls__button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="search__close" onClick={closeModal}></div>
      </div>
    </Overlay>
  );
};

Search.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Search;
