import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        ? 'button-round -favorite -first-icon'
        : 'button-round -first-icon';

    const favoriteInfoText = isFavoriteStatus
        ? 'remove from favorites'
        : 'add to favorites';

    return (
        <>
            <li className="grid-item-container">
                <ButtonRound
                    className={favoriteClasses}
                    icon={iconFav}
                    info={favoriteInfoText}
                    onClick={favoriteToggleHandler}
                />
                <ButtonRound
                    className="button-round -show-icon"
                    icon={iconDetail}
                    info="show details"
                    onClick={showDetailModalHandler}
                />
                <ButtonLong
                    className="-show-button"
                    icon={iconBtn}
                    onClick={addToCartHandler}
                    title="Add to cart"
                />
                <Link className="grid-item" to={`/product/${id}`}>
                    <div className="grid-item__img-wrap">
                        <img decoding="async" loading="lazy" src={imageUrl} />
                    </div>
                    <p className="grid-item__description">
                        {name}
                        <br />${price / 100}
                    </p>
                </Link>
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
