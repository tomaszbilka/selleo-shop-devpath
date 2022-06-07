import User from 'components/User';
import { useTitle } from 'react-use';

const Login = () => {
  useTitle('Login demo');

  return <User />;
};

export default Login;
