import PropTypes from 'prop-types';

const ButtonSlim = ({ title, onClick, activeTitle }) => {
  const style =
    activeTitle === title ? 'buttonSlim buttonSlim--isActive' : 'buttonSlim';

  const onClickHandler = () => {
    onClick(title);
  };

  return (
    <button onClick={onClickHandler} className={style} type="button">
      {title}
    </button>
  );
};

ButtonSlim.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activeTitle: PropTypes.string.isRequired,
};

export default ButtonSlim;
