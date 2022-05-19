import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonLong from 'components/UI/ButtonLong';
import ButtonRound from 'components/UI/ButtonRound';
import Modal from 'components/Modals/Modal';
import ShowProductDetail from 'components/ShowProductDetail';
import { faHeart, faBarChart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GridItem = ({ imageUrl, name, price, id, description, inStock }) => {
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const navigate = useNavigate();
  const iconFav = <FontAwesomeIcon icon={faHeart} />;
  const iconDetail = <FontAwesomeIcon icon={faBarChart} />;
  const iconBtn = <FontAwesomeIcon icon={faCartShopping} />;

  const favoriteToggleHandler = () => {
    console.log('add to favorite');
  };

  const showProductHandler = () => {
    navigate(`/product/${id}`);
  };

  const showDetailModalHandler = () => {
    setIsDetailModalVisible(true);
  };

  const closeDetailsModalHandler = () => {
    setIsDetailModalVisible(false);
  };

  const addToCartHandler = () => {
    console.log('add to cart');
  };

  return (
    <li className="gridItem" onClick={showProductHandler}>
      {isDetailModalVisible && (
        <Modal
          element={
            <ShowProductDetail
              product={{ imageUrl, name, price, id, description, inStock }}
            />
          }
          onClick={closeDetailsModalHandler}
        />
      )}
      <div className="gridItem__img-wrap">
        <img src={imageUrl} className="gridItem__img-wrap__image" />
      </div>
      <div className="gridItem__description">
        <p className="gridItem__description__text">{name}</p>
        <p className="gridItem__description__text">${price / 100}</p>
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
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GridItem;
