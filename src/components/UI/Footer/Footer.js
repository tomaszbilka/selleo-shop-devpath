import { ReactComponent as IconFacebook } from 'images/icons/facebook-brands.svg';
import { ReactComponent as IconPinterest } from 'images/icons/pinterest-brands.svg';
import { ReactComponent as IconInstagram } from 'images/icons/instagram-brands.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <div className="footer__section__title">ABOUT US</div>
        <p className="footer__section__description">
          Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
          incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud.
        </p>
        <div className="footer__section__icons">
          <IconFacebook className="footer__section__icons__icon" />
          <IconInstagram className="footer__section__icons__icon" />
          <IconPinterest className="footer__section__icons__icon" />
        </div>
      </div>
      <div className="footer__section footer__section--middle">
        <div className="footer__section__title">INFORMATION</div>
        <ul className="footer__section__list">
          <li>About Us</li>
          <li>Manufactures</li>
          <li>Tracking Orders</li>
          <li>Privacy & Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer__section">
        <div className="footer__section__title">MY ACCOUNT</div>
        <ul className="footer__section__list">
          <li>Login</li>
          <li>My Cart</li>
          <li>Favorites</li>
          <li>My Account</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
