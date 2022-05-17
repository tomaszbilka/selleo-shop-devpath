import PropsTypes from 'prop-types';

const Error = ({ children }) => {
  return <div className="error">{children}</div>;
};

Error.propTypes = {
  children: PropsTypes.string.isRequired,
};

export default Error;
