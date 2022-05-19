import PropTypes from 'prop-types';

const SectionHeader = ({ title, description, isMarginTop }) => {
  const style = isMarginTop
    ? 'title-container -margin-top '
    : 'title-container';

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
  isMarginTop: PropTypes.bool,
};

SectionHeader.defaultProps = {
  isMarginTop: false,
};

export default SectionHeader;
