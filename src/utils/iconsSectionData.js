import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChair,
  faLaptop,
  faBed,
  faKitchenSet,
} from '@fortawesome/free-solid-svg-icons';

const linkIcons = [
  {
    path: '/products',
    component: <FontAwesomeIcon icon={faBed} className="icons-section-icon" />,
    title: 'beds',
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
      <FontAwesomeIcon icon={faKitchenSet} className="icons-section-icon" />
    ),
    title: 'kitchen',
  },
];

export default linkIcons;
