import { fetchUsersApi } from 'utils/api';

export const isUserExist = async (userName) => {
  try {
    const response = await fetchUsersApi();
    if (!response.statusText === 'OK') {
      throw new Error('Something went wrong!');
    }
    const usersArray = await response.data.map((el) => el.user);
    return usersArray.includes(userName);
  } catch (err) {
    return err.message || 'Something went wrong...';
  }
};

export const isPasswordMatch = async (userName, password) => {
  try {
    const response = await fetchUsersApi();
    if (!response.statusText === 'OK') {
      throw new Error('Something went wrong!');
    }
    const usersArray = await response.data.map((el) => el.user);
    const userIndex = usersArray.indexOf(userName);
    const userObject = response.data[userIndex];
    return userObject.password === password;
  } catch (err) {
    return err.message || 'Something went wrong...';
  }
};
