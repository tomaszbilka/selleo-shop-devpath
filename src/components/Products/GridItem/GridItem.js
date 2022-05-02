import PropTypes from 'prop-types';

const GridItem = ({ image, title, price }) => {
  return (
    <li className="gridItem">
      <div className="gridItem__img-wrap">
        <img src={image} className="gridItem__img-wrap__image" />
      </div>
      <div className="gridItem__description">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </li>
  );
};

GridItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default GridItem;
