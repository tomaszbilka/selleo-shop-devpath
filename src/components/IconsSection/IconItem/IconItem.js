import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const IconItem = ({ path, component, title }) => {
  return (
    <Link to={path} className="icon-section">
      <div className="icon-section__icon">
        <div className="icon-section__icon__border"></div>
        <div className="icon-section__icon__container">
          {component}
          <p className="icon-section__icon__text">{title}</p>
        </div>
      </div>
    </Link>
  );
};

IconItem.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default IconItem;
