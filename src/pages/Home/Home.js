import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'components/Slider';
import IconsSection from 'components/IconsSection';
import ShowProductsSection from 'components/ShowProductsSection';
import { fetchProducts } from 'store/products';
import { fetchCategories } from 'store/categories';
import 'react-toastify/dist/ReactToastify.css';
import { useTitle } from 'react-use';
import { useFavicon } from 'react-use';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import favicon from 'images/icons/favicon.png';

const BlogLayout = lazy(() => import('components/BlogSection/BlogLayout'));

const Home = () => {
  useTitle('demo shop');
  useFavicon(favicon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Slider />
      <IconsSection />
      <ShowProductsSection />
      <Suspense fallback={<LoadingSpinner />}>
        <BlogLayout />
      </Suspense>
    </>
  );
};

export default Home;
