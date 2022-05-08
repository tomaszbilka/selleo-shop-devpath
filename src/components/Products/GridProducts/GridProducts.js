import GridItem from 'components/Products/GridItem';

const data = [
  {
    image:
      'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fproducts%2F11-02.jpg%3Fv%3D1632281991&w=384&q=75',
    title: 'Variable Products',
    price: '$69.99',
    id: 1,
  },
  {
    image:
      'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fproducts%2F11-02.jpg%3Fv%3D1632281991&w=384&q=75',
    title: 'Variable Products',
    price: '$69.99',
    id: 2,
  },
  {
    image:
      'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fproducts%2F11-02.jpg%3Fv%3D1632281991&w=384&q=75',
    title: 'Variable Products',
    price: '$69.99',
    id: 3,
  },
  {
    image:
      'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fproducts%2F11-02.jpg%3Fv%3D1632281991&w=384&q=75',
    title: 'Variable Products',
    price: '$69.99',
    id: 4,
  },
  {
    image:
      'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fproducts%2F11-02.jpg%3Fv%3D1632281991&w=384&q=75',
    title: 'Variable Products',
    price: '$69.99',
    id: 5,
  },
  {
    image:
      'https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Fproducts%2F11-02.jpg%3Fv%3D1632281991&w=384&q=75',
    title: 'Variable Products',
    price: '$69.99',
    id: 6,
  },
];

const GridProducts = () => {
  return (
    <ul className="grid">
      {data.map((el, index) => (
        <GridItem {...el} key={index} />
      ))}
    </ul>
  );
};

export default GridProducts;
