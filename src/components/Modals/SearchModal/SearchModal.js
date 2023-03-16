import PropTypes from 'prop-types';
import Overlay from 'components/UI/Overlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchModal = ({ closeModal }) => {
    const startSearchHandler = () => {
        console.log('search');
    };

    return (
        <Overlay onClick={closeModal}>
            <div className="search">
                <div className="search__controls">
                    <input
                        className="search__input"
                        type="text"
                        placeholder="Enter your search keyword..."
                    />
                    <button
                        className="search__button"
                        onClick={startSearchHandler}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <button className="search__close" onClick={closeModal}></button>
            </div>
        </Overlay>
    );
};

SearchModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default SearchModal;
