import { useParams } from 'react-router-dom';

function ProductDetail() {
  const params = useParams();

  return (
    <div>
      ProductDetail:
      {params.productId}
    </div>
  );
}

export default ProductDetail;
