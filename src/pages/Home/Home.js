import Slider from 'components/Slider';
import IconsSection from 'components/IconsSection';
import ShowProductsSection from 'components/ShowProductsSection';
import BlogLayout from 'components/BlogSection/BlogLayout';

const Home = () => {
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
