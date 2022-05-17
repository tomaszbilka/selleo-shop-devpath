import { useLayoutEffect } from 'react';

const Products = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>All Products</div>;
};

export default Products;
