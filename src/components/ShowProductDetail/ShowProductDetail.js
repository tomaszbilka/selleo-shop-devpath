import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/UI/Button';
import PropTypes from 'prop-types';
import ButtonRound from 'components/UI/ButtonRound';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartCounter from 'components/Cart/CartCounter';
import { addToCart } from 'store/cart';
import { toggleFavoriteState } from 'store/products';
import { getIsFavoriteStatusFromProducts } from 'store/products/selectors';
import { setFavoritesToLocalStorage } from 'utils/localStorage';

const ShowProductDetail = ({ product }) => {
  const [itemsMultiplier, setItemsMultiplier] = useState();
  const { name, description, price, imageUrl, inStock, id } = product;
  const isFavoriteStatusAll = useSelector(getIsFavoriteStatusFromProducts);
  const dispatch = useDispatch();

  const iconFav = <FontAwesomeIcon icon={faHeart} />;

  const isFavoriteStatusObject = isFavoriteStatusAll.filter(
    (item) => item.id === id
  );
  const isFavoriteStatus = isFavoriteStatusObject[0].isFavorite;

  const addProductToCartHandler = () => {
    console.log(`add product with id: ${id} to cart!`);
    for (let i = 0; i < itemsMultiplier; i++) {
      dispatch(addToCart(product));
    }
  };

  const favoriteToggleHandler = () => {
    dispatch(toggleFavoriteState(id));
  };

  useEffect(() => {
    setFavoritesToLocalStorage(isFavoriteStatusAll);
  }, [isFavoriteStatusAll]);

  const setItemsMultiplierHandler = (amount) => {
    setItemsMultiplier(amount);
  };

  const favoriteClasses = isFavoriteStatus
    ? 'button-round -favorite'
    : 'button-round';

  const favoriteInfoText = isFavoriteStatus
    ? 'remove from favorites'
    : 'add to favorites';

  return (
    <section className="detail">
      <div className="detail__image-wrap">
        <img src={imageUrl} alt={name} className="detail__img" />
      </div>
      <div className="detail__info">
        <p className="detail__stock">
          <span className="detail__name">Availability:</span>
          {inStock}
        </p>
        <h2 className="detail__title">{name}</h2>
        <p className="detail__price">${price / 100}</p>
        <p className="detail__text">{description}</p>
        <div className="detail__buttons">
          <CartCounter multiplier={setItemsMultiplierHandler} />
          <Button title="Add to Cart" onClick={addProductToCartHandler} />
        </div>
        <ButtonRound
          icon={iconFav}
          onClick={favoriteToggleHandler}
          info={favoriteInfoText}
          className={favoriteClasses}
        />
      </div>
    </section>
  );
};

ShowProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ShowProductDetail;
