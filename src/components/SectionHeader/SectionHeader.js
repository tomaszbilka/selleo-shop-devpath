import PropTypes from 'prop-types';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="title-container">
      <h2 className="title-container__title">{title}</h2>
      <p className="title-container__description">{description}</p>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionHeader;
