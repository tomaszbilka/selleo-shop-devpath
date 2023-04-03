import PropTypes from 'prop-types';

const ButtonLong = ({ title, onClick, icon, className }) => {
    return (
        <button onClick={onClick} className={`button-long ${className}`}>
            {icon}
            <p className="button-long__title">{title}</p>
        </button>
    );
};

ButtonLong.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default ButtonLong;
