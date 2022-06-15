import React from 'react';
import { useState, useCallback } from 'react';
import { retrieveStoredName } from 'utils/localStorage';
import { retrieveStoredToken } from 'utils/localStorage';
import PropTypes from 'prop-types';

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: '',
  userName: '',
  login: () => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData;
  }

  const storedUserName = retrieveStoredName();
  let initialUserName;
  if (storedUserName) {
    initialUserName = storedUserName;
  }

  const [token, setToken] = useState(initialToken);
  const [userNameLog, setUserNameLog] = useState(initialUserName);

  const userIsLoggedIn = !!token;

  const loginHandler = async (token, userName) => {
    localStorage.setItem('token', token);
    setToken(token);
    setUserNameLog(userName);
    await localStorage.setItem('userName', userName);
  };

  const logoutHandler = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setToken(null);
  }, []);

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    userName: userNameLog,
    token: token,
    login: loginHandler,
    logout: logoutHandler,
  };

  AuthContextProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
