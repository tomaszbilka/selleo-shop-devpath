import PropTypes from 'prop-types';

const BottomDots = ({ onClick, index, activeIndex }) => {
    const changeSlideHandler = () => {
        onClick(index);
    };

    const dotStyle = activeIndex === index ? 'dot dot--active' : 'dot';

    return (
        <div
            className={dotStyle}
            onClick={changeSlideHandler}
            data-testid={index}
        ></div>
    );
};

BottomDots.propTypes = {
    onClick: PropTypes.func.isRequired,
    index: PropTypes.number,
    activeIndex: PropTypes.number,
};

export default BottomDots;
