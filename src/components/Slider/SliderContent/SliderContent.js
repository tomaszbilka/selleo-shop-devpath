import PropTypes from 'prop-types';
import Button from 'components/UI/Button';

const SliderContent = ({
    title,
    subtitle,
    description,
    source,
    btnLink,
    activeIndex,
    index,
}) => {
    const onClickHandler = () => {
        console.log(btnLink);
    };

    const containerStyle =
        activeIndex === index
            ? 'slider-content slider-content--active'
            : 'slider-content';

    return (
        <div className={containerStyle}>
            <div>
                <h3 className="slider-content__subtitle">{subtitle}</h3>
                <h1 className="slider-content__title">{title}</h1>
                <p className="slider-content__description">{description}</p>
                <Button
                    title="Shop Now"
                    onClick={onClickHandler}
                    className="button"
                />
            </div>
            <div>
                <img
                    src={source}
                    alt="title"
                    className="slider-content__image"
                />
            </div>
        </div>
    );
};

SliderContent.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    btnLink: PropTypes.string.isRequired,
    activeIndex: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

export default SliderContent;
