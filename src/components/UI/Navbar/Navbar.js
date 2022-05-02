const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list__item">Home</li>
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
