import Settings from 'components/Settings';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTitle } from 'react-use';
import AuthContext from 'store/auth-context';

const UserSettings = () => {
  useTitle('user settings demo');
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return <Settings />;
};

export default UserSettings;
