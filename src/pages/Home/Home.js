import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'components/Slider';
import IconsSection from 'components/IconsSection';
import ShowProductsSection from 'components/ShowProductsSection';
import BlogLayout from 'components/BlogSection/BlogLayout';
import { fetchProducts } from 'store/products';
import { fetchCategories } from 'store/categories';

const Home = () => {
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
      <BlogLayout />
    </>
  );
};

export default Home;
