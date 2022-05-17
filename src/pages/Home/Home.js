import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'components/Slider';
import IconsSection from 'components/IconsSection';
import ShowProductsSection from 'components/ShowProductsSection';
import BlogLayout from 'components/BlogSection/BlogLayout';
import { fetchProducts } from 'store/products';
import useTilg from 'tilg';

const Home = () => {
  useTilg();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Slider />
      <IconsSection />
      <ShowProductsSection />
      <BlogLayout />
    </>
  );
};

export default Home;
