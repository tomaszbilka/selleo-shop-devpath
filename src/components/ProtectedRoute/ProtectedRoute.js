import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from 'store/auth-context';

const ProtectedRoute = ({ children }) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authCtx.token) {
    navigate('/login', { replace: true });
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
