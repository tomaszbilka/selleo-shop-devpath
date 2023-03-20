import PropTypes from 'prop-types';

const RoundButton = ({ onClick, direction }) => {
    const arrow = direction === 'left' ? '<' : '>';

    return (
        <button onClick={onClick} className="roundBtnContainer">
            <span className="roundBtnContainer__arrow">{arrow}</span>
        </button>
    );
};

RoundButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    direction: PropTypes.string,
};

export default RoundButton;
