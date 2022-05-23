import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChair,
  faLaptop,
  faBed,
  faKitchenSet,
} from '@fortawesome/free-solid-svg-icons';

const linkIcons = [
  {
    path: '/products/seats',
    component: (
      <FontAwesomeIcon icon={faChair} className="icons-section-icon" />
    ),
    title: 'seats',
  },
  {
    path: '/products/beds',
    component: <FontAwesomeIcon icon={faBed} className="icons-section-icon" />,
    title: 'beds',
  },
  {
    path: '/products/office',
    component: (
      <FontAwesomeIcon icon={faLaptop} className="icons-section-icon" />
    ),
    title: 'office',
  },
  {
    path: '/products/kitchen',
    component: (
      <FontAwesomeIcon icon={faKitchenSet} className="icons-section-icon" />
    ),
    title: 'kitchen',
  },
];

export default linkIcons;
