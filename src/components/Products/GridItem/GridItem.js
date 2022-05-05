import PropTypes from 'prop-types';
import ButtonRound from '../../UI/ButtonRound';
import { faHeart, faBarChart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonLong from '../../UI/ButtonLong';

const GridItem = ({ image, title, price, id }) => {
  const iconFav = <FontAwesomeIcon icon={faHeart} />;
  const iconDetail = <FontAwesomeIcon icon={faBarChart} />;
  const iconBtn = <FontAwesomeIcon icon={faCartShopping} />;

  const favoriteToggleHandler = () => {
    console.log('add to favorite');
  };

  const showProductHandler = () => {
    console.log(id);
  };

  const showDetailModalHandler = () => {
    console.log('show detail modal');
  };

  const addToCartHandler = () => {
    console.log('add to cart');
  };

  return (
    <li className="gridItem" onClick={showProductHandler}>
      <div className="gridItem__img-wrap">
        <img src={image} className="gridItem__img-wrap__image" />
      </div>
      <div className="gridItem__description">
        <p className="gridItem__description__text">{title}</p>
        <p className="gridItem__description__text">{price}</p>
      </div>
      <div className="gridItem__first-icon">
        <ButtonRound
          icon={iconFav}
          onClick={favoriteToggleHandler}
          info="add to favorites"
          className="button-round"
        />
      </div>
      <div className="gridItem__show-icon">
        <ButtonRound
          icon={iconDetail}
          onClick={showDetailModalHandler}
          info="show details"
          className="button-round"
        />
      </div>
      <div className="gridItem__show-button">
        <ButtonLong
          title="Shop now"
          onClick={addToCartHandler}
          icon={iconBtn}
        />
      </div>
    </li>
  );
};

GridItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GridItem;