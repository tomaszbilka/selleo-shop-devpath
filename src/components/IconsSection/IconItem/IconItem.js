import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const IconItem = ({ path, component, title }) => {
    return (
        <Link to={path} className="icon-section">
            <div className="icon-section__container">
                {component}
                <p className="icon-section__text">{title}</p>
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
