import { ReactComponent as ChairIcon } from 'images/icons/chair.svg';
import { ReactComponent as BedIcon } from 'images/icons/bed.svg';
import { ReactComponent as LaptopIcon } from 'images/icons/laptop.svg';
import { ReactComponent as KitchenIcon } from 'images/icons/kitchen.svg';

const linkIcons = [
  {
    path: '/products/seats',
    component: <ChairIcon />,
    title: 'seats',
  },
  {
    path: '/products/beds',
    component: <BedIcon />,
    title: 'beds',
  },
  {
    path: '/products/office',
    component: <LaptopIcon />,
    title: 'office',
  },
  {
    path: '/products/kitchen',
    component: <KitchenIcon />,
    title: 'kitchen',
  },
];

export default linkIcons;
