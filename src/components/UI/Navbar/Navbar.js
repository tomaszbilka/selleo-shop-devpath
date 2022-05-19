import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCategories, getCategoriesStatus } from 'store/categories/selectors';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import Error from '../Error';

const Navbar = () => {
  const categories = useSelector(getCategories);
  const categoriesStatus = useSelector(getCategoriesStatus);

  let categoriesList;

  if (categoriesStatus === 'fulfilled') {
    categoriesList = categories.map((category, index) => (
      <Link to={`/products/${category.category_name}`} key={index}>
        <li>{category.category_name}</li>
      </Link>
    ));
  }

  if (categoriesStatus === 'pending') {
    categoriesList = (
      <li>
        <LoadingSpinner size="small" />
      </li>
    );
  }

  if (categoriesStatus === 'rejected') {
    categoriesList = (
      <li>
        <Error>Problem with fetch categories</Error>
      </li>
    );
  }

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
            {categoriesList}
          </ul>
        </li>
        <li className="main-nav__list__item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
