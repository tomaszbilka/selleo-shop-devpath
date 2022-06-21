import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Button from 'components/UI/Button';
import ButtonSlim from 'components/UI/ButtonSlim';
import { isPasswordMatch, isUserExist } from 'utils/user';
import AuthContext from 'store/auth-context';
import { registerNewUser } from 'utils/api';

const User = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [isActive, setIsActive] = useState('login');
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const changeToSignUpHandler = () => {
    setIsActive('sign up');
    setIsRegistered(false);
  };

  const changeToLoginUpHandler = () => {
    setIsActive('login');
    setIsRegistered(true);
  };

  const buttonTitle = isRegistered ? 'Login' : 'Sign up';
  const title = isRegistered ? 'Login' : 'Sign up';

  const validationSchema = !isRegistered
    ? Yup.object({
        name: Yup.string()
          .min(3, 'Must be at least 3 characters long')
          .required('Required'),
        password: Yup.string()
          .min(3, 'Must be at least 3 characters long')
          .required('No password provided')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        repeatPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Repeat your password'),
      })
    : Yup.object({
        name: Yup.string()
          .min(3, 'Must be at least 3 characters long')
          .required('Required'),
        password: Yup.string()
          .min(3, 'Must be at least 3 characters long')
          .required('No password provided')
          .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      });

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      if (isRegistered) {
        //check user name and password and log in
        const isUserValid = await isUserExist(values.name);
        const isPasswordValid = await isPasswordMatch(
          values.name,
          values.password
        );
        if (isUserValid && isPasswordValid) {
          const token = Date.now();
          authCtx.login(token, values.name);
          toast.success('You successfully log in!', {
            autoClose: 1500,
          });
          navigate('/');
        } else {
          toast.error('Your user name or email is invalid', {
            autoClose: 2500,
          });
        }
      } else {
        //check if user exist and register new user
        const isUserValid = await isUserExist(values.name);
        console.log(isUserValid);
        if (isUserValid) {
          toast.error('User name already exist! Choose different one, please', {
            autoClose: 3500,
          });
          formik.resetForm();
          return;
        }
        const response = await registerNewUser({
          user: values.name,
          password: values.password,
        });
        if (response.statusText === 'Created') {
          toast.success(
            `Hello ${response.data.user}! Your are registered! You can log in now!`
          );
          formik.resetForm();
          setIsRegistered(true);
        } else {
          toast.error('Something went wrong with register, contact us please!');
        }
      }
    },
  });

  const isDisabled =
    formik.errors.name ||
    formik.errors.password ||
    formik.errors.repeatPassword;

  return (
    <div className="login-form">
      <form onSubmit={formik.handleSubmit} className="form -user">
        <h2 className="form__title">{title}</h2>
        <div className="form__names-controls">
          <div className="form__controls">
            <label htmlFor="name" className="form__label">
              First Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="form__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            ></input>
            {formik.touched.name && formik.errors.name ? (
              <div className="form__error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form__controls">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form__input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            ></input>
            {formik.touched.password && formik.errors.password ? (
              <div className="form__error">{formik.errors.password}</div>
            ) : null}
          </div>
          {!isRegistered && (
            <div className="form__controls">
              <label htmlFor="repeatPassword" className="form__label">
                Repeat Password
              </label>
              <input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                className="form__input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
              ></input>
              {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
                <div className="form__error">
                  {formik.errors.repeatPassword}
                </div>
              ) : null}
            </div>
          )}
        </div>
        <Button title={buttonTitle} type="submit" disabled={isDisabled} />
        <div className="login-form__controls">
          <ButtonSlim
            title="login"
            activeTitle={isActive}
            onClick={changeToLoginUpHandler}
          />
          <ButtonSlim
            title="sign up"
            activeTitle={isActive}
            onClick={changeToSignUpHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default User;
