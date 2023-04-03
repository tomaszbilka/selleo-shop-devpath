import PropTypes from 'prop-types';

const SectionHeader = ({ title, description, extraClassName = '' }) => {
    const style = `title-container ${extraClassName}`;

    return (
        <div className={style}>
            <h2 className="title-container__title">{title}</h2>
            <p className="title-container__description">{description}</p>
        </div>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    marginTop: PropTypes.string,
    extraClassName: PropTypes.string,
};

export default SectionHeader;
