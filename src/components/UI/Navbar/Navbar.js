import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCategories } from 'store/categories/selectors';

const Navbar = () => {
  const categories = useSelector(getCategories);
  console.log(categories);

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <Link className="main-nav__list__item" to="/">
            Home
          </Link>
        </li>
        <li className="main-nav__list__dropdown-btn">
          <div className="main-nav__list__item">
            Products <span className="main-nav__list__item__arrow">&or;</span>
          </div>
          <ul className="main-nav__list__item__dropdown-content">
            <li>Products 1</li>
            <li>Products 2</li>
          </ul>
        </li>
        <li className="main-nav__list__item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
