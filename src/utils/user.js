import { fetchUsersApi } from 'utils/api';

export const isUserExist = async (userName) => {
  const response = await fetchUsersApi();
  const usersArray = await response?.data?.map((el) => el.user);
  return usersArray.includes(userName);
};

export const isPasswordMatch = async (userName, password) => {
  const response = await fetchUsersApi();
  const usersArray = await response?.data?.map((el) => el.user);
  const userIndex = usersArray.indexOf(userName);
  const userObject = response.data[userIndex];
  return userObject?.password === password;
};
