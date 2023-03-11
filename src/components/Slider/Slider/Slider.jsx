import { useState } from 'react';
import SliderContent from 'components/Slider/SliderContent';
import sliderData from 'utils/sliderData';
import BottomDots from 'components/Slider/BottomDots/BottomDots';
import RoundButton from 'components/Slider/RoundButton';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlideLeftHandler = () => {
    setActiveIndex((prev) => {
      if (prev === 0) {
        return sliderData.length - 1;
      } else {
        return (prev -= 1);
      }
    });
  };

  const changeSlideRightHandler = () => {
    setActiveIndex((prev) => {
      if (prev === sliderData.length - 1) {
        return 0;
      } else {
        return (prev += 1);
      }
    });
  };

  const changeSlideByDotsHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider">
      {sliderData.map((item, index) => (
        <SliderContent
          key={item.title}
          {...item}
          activeIndex={activeIndex}
          index={index}
        />
      ))}
      <div className="slider__dotsContainer">
        {sliderData.map((_, index) => (
          <BottomDots
            key={index}
            onClick={changeSlideByDotsHandler}
            index={index}
            activeIndex={activeIndex}
          />
        ))}
      </div>
      <div className="slider__arrowContainer slider__arrowContainer--left">
        <RoundButton direction="left" onClick={changeSlideLeftHandler} />
      </div>
      <div className="slider__arrowContainer slider__arrowContainer--right">
        <RoundButton onClick={changeSlideRightHandler} />
      </div>
    </div>
  );
};

export default Slider;
