import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTitle } from 'react-use';
import AuthContext from 'store/auth-context';
import Button from 'components/UI/Button';
import { toast } from 'react-toastify';

const UserSettings = () => {
  useTitle('user settings demo');
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate('/login');
    }
  }, []);

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
    toast.success('You successfully logout!');
  };

  return (
    <>
      <div>User {authCtx.userName} settings</div>
      <Button onClick={logoutHandler} title="logout" />
    </>
  );
};

export default UserSettings;
