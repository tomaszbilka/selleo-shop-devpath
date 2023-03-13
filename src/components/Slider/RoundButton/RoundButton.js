import PropTypes from 'prop-types';

const RoundButton = ({ onClick, direction }) => {
    const arrow = direction === 'left' ? '<' : '>';

    return (
        <div onClick={onClick} className="roundBtnContainer">
            <span className="roundBtnContainer__arrow">{arrow}</span>
        </div>
    );
};

RoundButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    direction: PropTypes.string,
};

export default RoundButton;
