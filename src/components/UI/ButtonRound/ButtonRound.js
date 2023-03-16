import PropTypes from 'prop-types';

const ButtonRound = ({ icon, className, info, onClick }) => {
    return (
        <>
            <button onClick={onClick} className={className}>
                {icon}
                <p className="button-round__info">{info}</p>
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
