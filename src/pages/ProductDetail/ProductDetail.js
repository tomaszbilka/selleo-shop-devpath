import { useLayoutEffect } from 'react';
import ShowProductDetail from 'components/ShowProductDetail';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from 'store/products/selectors';

function ProductDetail() {
  const { productId } = useParams();
  const allProducts = useSelector(getProducts);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedProduct = allProducts.filter(
    (product) => product.id === parseInt(productId)
  );

  return <ShowProductDetail product={selectedProduct[0]} />;
}

export default ProductDetail;
