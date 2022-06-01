import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return <header className="page-title">{title}</header>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
