import { useState } from 'react';
import GridProducts from '../Products/GridProducts';
import ButtonSlim from '../UI/ButtonSlim';

const ShowProductsSection = () => {
  const [isActive, setIsActive] = useState('New Arrival');

  const changeActiveButtonsHandler = (title) => {
    setIsActive(title);
  };

  return (
    <section className="showContainer">
      <h2>Our Products</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
        tempor incididunt ut labore
      </p>
      <div className="showContainer__btnContainer">
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
