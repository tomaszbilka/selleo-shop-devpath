import ReactDOM from 'react-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faChair,
} from '@fortawesome/free-solid-svg-icons';
import Search from '../../Search';

const Header = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const openSearchModalHandler = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModalHandler = () => {
    setIsSearchModalOpen(false);
  };

  const openCartModalHandler = () => {
    console.log('open cart modal');
  };

  const searchModal = ReactDOM.createPortal(
    <Search closeModal={closeSearchModalHandler} />,
    document.getElementById('modal')
  );

  return (
    <header className="header">
      {isSearchModalOpen && searchModal}
      <div className="header__logo">
        <Link to="/">
          <FontAwesomeIcon icon={faChair} className="header__logo__icon" />
          <span className="header__logo__text">LOGO</span>
        </Link>
      </div>
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
          <Link to="/user/settings/someId">
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
          <span className="header__top-menu__control__cart-info">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;