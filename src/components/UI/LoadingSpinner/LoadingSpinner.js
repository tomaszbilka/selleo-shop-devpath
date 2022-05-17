import PropsTypes from 'prop-types';

const LoadingSpinner = ({ size }) => {
  return (
    <div className={size}>
      <div className={`${size}__outer`}></div>
      <div className={`${size}__inner-one`}></div>
      <div className={`${size}__inner-two`}></div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropsTypes.string,
};

LoadingSpinner.defaultProps = {
  size: 'small',
};

export default LoadingSpinner;
