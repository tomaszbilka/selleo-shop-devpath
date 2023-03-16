import PropTypes from 'prop-types';

const ButtonLong = ({ title, onClick, icon }) => {
    return (
        <button onClick={onClick} className="button-long">
            {icon}
            <p className="buttonLong__title">{title}</p>
        </button>
    );
};

ButtonLong.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ButtonLong;
