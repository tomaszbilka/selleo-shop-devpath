import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSocks,
  faChair,
  faLaptop,
  faTshirt,
} from '@fortawesome/free-solid-svg-icons';

const linkIcons = [
  {
    path: '/products',
    component: (
      <FontAwesomeIcon icon={faSocks} className="icons-section-icon" />
    ),
    title: 'wardrobes',
  },
  {
    path: '/products',
    component: (
      <FontAwesomeIcon icon={faChair} className="icons-section-icon" />
    ),
    title: 'seats',
  },
  {
    path: '/products',
    component: (
      <FontAwesomeIcon icon={faLaptop} className="icons-section-icon" />
    ),
    title: 'office',
  },
  {
    path: '/products',
    component: (
      <FontAwesomeIcon icon={faTshirt} className="icons-section-icon" />
    ),
    title: 'clothes',
  },
];

export default linkIcons;
