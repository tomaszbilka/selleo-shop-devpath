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

const Header = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const numberOfItemsInCart = useSelector(getNumberOfItemsInCart);

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
          element={<SearchModal closeModal={closeSearchModalHandler} />}
          onClick={closeSearchModalHandler}
        />
      )}
      <div className="header__logo">
        <Link to="/">
          <FontAwesomeIcon icon={faChair} className="header__logo__icon" />
          <span className="header__logo__text">LOGO</span>
        </Link>
      </div>
      {authCtx.isLoggedIn && (
        <p className="header__user-name">Hi {authCtx.userName}!</p>
      )}
      <div className="header__top-menu">
        <div
          className="header__top-menu__control"
          onClick={openSearchModalHandler}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="header__top-menu__control__icon"
          />
        </div>
        <div className="header__top-menu__control">
          <Link to="/user/settings">
            <FontAwesomeIcon
              icon={faUser}
              className="header__top-menu__control__icon"
            />
          </Link>
        </div>
        <div
          className="header__top-menu__control"
          onClick={openCartModalHandler}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="header__top-menu__control__icon"
          />
          <span className="header__top-menu__control__cart-info">
            {numberOfItemsInCart}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
