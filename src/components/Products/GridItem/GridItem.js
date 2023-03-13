import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonLong from 'components/UI/ButtonLong';
import ButtonRound from 'components/UI/ButtonRound';
import Modal from 'components/Modals/Modal';
import ShowProductDetail from 'components/ShowProductDetail';
import { faHeart, faBarChart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToCart } from 'store/cart';
import { toggleFavoriteState } from 'store/products';
import { getIsFavoriteStatusFromProducts } from 'store/products/selectors';
import { setFavoritesToLocalStorage } from 'utils/localStorage';

const GridItem = ({ product }) => {
    const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isFavoriteStatusAll = useSelector(getIsFavoriteStatusFromProducts);
    const { imageUrl, name, price, id, description, inStock } = product;
    const iconFav = <FontAwesomeIcon icon={faHeart} />;
    const iconDetail = <FontAwesomeIcon icon={faBarChart} />;
    const iconBtn = <FontAwesomeIcon icon={faCartShopping} />;

    const isFavoriteStatusObject = isFavoriteStatusAll.filter(
        (item) => item.id === id
    );
    const isFavoriteStatus = isFavoriteStatusObject[0].isFavorite;

    const favoriteToggleHandler = () => {
        dispatch(toggleFavoriteState(id));
    };

    useEffect(() => {
        setFavoritesToLocalStorage(isFavoriteStatusAll);
    }, [isFavoriteStatusAll]);

    const redirectToDetailPage = (e) => {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'LI') {
            navigate(`/product/${id}`);
        } else {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
    };

    const showDetailModalHandler = () => {
        setIsDetailModalVisible(true);
    };

    const closeDetailsModalHandler = () => {
        setIsDetailModalVisible(false);
    };

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    };

    const favoriteClasses = isFavoriteStatus
        ? 'button-round -favorite'
        : 'button-round';

    const favoriteInfoText = isFavoriteStatus
        ? 'remove from favorites'
        : 'add to favorites';

    return (
        <>
            <li className="gridItem-container" onClick={redirectToDetailPage}>
                <div className="gridItem">
                    <div className="gridItem__img-wrap">
                        <img src={imageUrl} />
                    </div>
                    <div className="gridItem__description">
                        <p className="gridItem__text">{name}</p>
                        <p className="gridItem__text">${price / 100}</p>
                    </div>
                    <div className="gridItem__first-icon">
                        <ButtonRound
                            icon={iconFav}
                            onClick={favoriteToggleHandler}
                            info={favoriteInfoText}
                            className={favoriteClasses}
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
                            title="Add to cart"
                            onClick={addToCartHandler}
                            icon={iconBtn}
                        />
                    </div>
                </div>
            </li>
            {isDetailModalVisible && (
                <Modal
                    element={
                        <ShowProductDetail
                            product={{
                                imageUrl,
                                name,
                                price,
                                id,
                                description,
                                inStock,
                            }}
                        />
                    }
                    onClick={closeDetailsModalHandler}
                />
            )}
        </>
    );
};

GridItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default GridItem;
