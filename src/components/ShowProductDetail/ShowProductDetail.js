import Button from 'components/UI/Button';
import PropTypes from 'prop-types';
import ButtonRound from 'components/UI/ButtonRound';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartCounter from 'components/Cart/CartCounter';

const ShowProductDetail = ({ product }) => {
  const iconFav = <FontAwesomeIcon icon={faHeart} />;
  const { name, description, price, imageUrl, inStock, id } = product;

  const addProductToCartHandler = () => {
    console.log(`add product with id: ${id} to cart`);
  };

  const favoriteToggleHandler = () => {
    console.log('favorite! or not!');
  };

  return (
    <section className="detail">
      <div className="detail__image-wrap">
        <img src={imageUrl} alt={name} className="detail__image-wrap__img" />
      </div>
      <div className="detail__info">
        <p className="detail__info__stock">
          <span className="detail__info__stock__name">Availability:</span>
          {inStock}
        </p>
        <h2 className="detail__info__title">{name}</h2>
        <p className="detail__info__price">${price / 100}</p>
        <p className="detail__info__text">{description}</p>
        <div className="detail__info__buttons">
          <CartCounter />
          <Button title="Add to Cart" onClick={addProductToCartHandler} />
        </div>
        <ButtonRound
          icon={iconFav}
          onClick={favoriteToggleHandler}
          info="add to favorites"
          className="button-round"
        />
      </div>
    </section>
  );
};

ShowProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ShowProductDetail;
