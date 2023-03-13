import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartModal } from 'store/appState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faUser,
    faCartShopping,
    faChair,
} from '@fortawesome/free-solid-svg-icons';
import SearchModal from 'components/Modals/SearchModal';
import Modal from 'components/Modals/Modal';
import { getNumberOfItemsInCart } from 'store/cart/selectors';
import AuthContext from 'store/auth-context';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import Error from 'components/UI/Error';

import { useGetAddressesQuery } from 'utils/rtk-query-addresses';

const Header = () => {
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const dispatch = useDispatch();
    const authCtx = useContext(AuthContext);
    const numberOfItemsInCart = useSelector(getNumberOfItemsInCart);
    const { data, error, isLoading } = useGetAddressesQuery('addresses');

    const openSearchModalHandler = () => {
        setIsSearchModalOpen(true);
    };

    const closeSearchModalHandler = () => {
        setIsSearchModalOpen(false);
    };

    const openCartModalHandler = () => {
        dispatch(toggleCartModal(true));
    };

    return (
        <header className="header">
            {isSearchModalOpen && (
                <Modal
                    element={
                        <SearchModal closeModal={closeSearchModalHandler} />
                    }
                    onClick={closeSearchModalHandler}
                />
            )}
            <div className="header__logo">
                <Link to="/">
                    <FontAwesomeIcon icon={faChair} className="header__icon" />
                    <span className="header__text">LOGO</span>
                </Link>
            </div>
            {authCtx.isLoggedIn && (
                <p className="header__user-name">Hi {authCtx.userName}!</p>
            )}
            {authCtx.isLoggedIn && (
                <div className="header__user-name">
                    {isLoading && <LoadingSpinner />}
                    {error && (
                        <Error>{error.message || 'Sth went wrong'}</Error>
                    )}
                    {data && <p>{data[0]?.address ?? 'no main address'}</p>}
                </div>
            )}
            <div className="header__top-menu">
                <div
                    className="header__controls"
                    onClick={openSearchModalHandler}
                >
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="header__controls--icon"
                    />
                </div>
                <div className="header__controls">
                    <Link to="/user/settings">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="header__controls--icon"
                        />
                    </Link>
                </div>
                <div
                    className="header__controls"
                    onClick={openCartModalHandler}
                >
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="header__controls--icon"
                    />
                    <span className="header__cart-info">
                        {numberOfItemsInCart}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
