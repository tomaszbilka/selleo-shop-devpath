import PropTypes from 'prop-types';
import GridItem from 'components/Products/GridItem';

const GridProducts = ({ products }) => {
  return (
    <ul className="grid">
      {products.map((el, index) => (
        <GridItem {...el} key={index} />
      ))}
    </ul>
  );
};

GridProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

export default GridProducts;
