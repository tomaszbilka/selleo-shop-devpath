import { useState } from 'react';
import GridProducts from 'components/Products/GridProducts';
import SectionHeader from 'components/SectionHeader';
import ButtonSlim from 'components/UI/ButtonSlim';

const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore';

const ShowProductsSection = () => {
  const [isActive, setIsActive] = useState('New Arrival');

  const changeActiveButtonsHandler = (title) => {
    setIsActive(title);
  };

  return (
    <section className="show-container">
      <SectionHeader title="Our Products" description={description} />
      <div className="show-container__btn-container">
        <ButtonSlim
          title="New Arrival"
          activeTitle={isActive}
          onClick={changeActiveButtonsHandler}
        />
        <ButtonSlim
          title="Featured"
          activeTitle={isActive}
          onClick={changeActiveButtonsHandler}
        />
        <ButtonSlim
          title="On Sale"
          activeTitle={isActive}
          onClick={changeActiveButtonsHandler}
        />
        <ButtonSlim
          title="Tending"
          activeTitle={isActive}
          onClick={changeActiveButtonsHandler}
        />
      </div>
      <GridProducts />
    </section>
  );
};

export default ShowProductsSection;
