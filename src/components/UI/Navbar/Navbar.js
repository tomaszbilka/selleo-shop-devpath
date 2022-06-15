import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCategories, getCategoriesStatus } from 'store/categories/selectors';
import LoadingSpinner from 'components/UI/LoadingSpinner';

const Navbar = () => {
  const categories = useSelector(getCategories);
  const categoriesStatus = useSelector(getCategoriesStatus);

  const categoriesList = useMemo(() => {
    switch (categoriesStatus) {
      case 'fulfilled':
        return categories.map((category, index) => (
          <Link to={`/products/${category.category_name}`} key={index}>
            <li>{category.category_name}</li>
          </Link>
        ));
      case 'pending':
        return (
          <li>
            <LoadingSpinner size="small" />
          </li>
        );
      case 'rejected':
        return <li className="main-nav__error">error</li>;
      default:
        return '';
    }
  }, [categoriesStatus]);

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <Link className="main-nav__item" to="/">
            Home
          </Link>
        </li>
        <li className="main-nav__dropdown-btn">
          <div className="main-nav__item">
            Products <span className="main-nav__arrow">&or;</span>
          </div>
          <ul className="main-nav__dropdown-content">{categoriesList}</ul>
        </li>
        <li>
          <Link className="main-nav__item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
