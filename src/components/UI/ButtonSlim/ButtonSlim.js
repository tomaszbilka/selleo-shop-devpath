import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonSlim = ({ title, onClick, activeTitle }) => {
  const isActive = activeTitle === title;
  const style = classNames('buttonSlim', { '-isActive': isActive });

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
