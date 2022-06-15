import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'http://localhost:3004/',
});

export default api;

api.interceptors.response.use(
  function (response) {
    if (!response.statusText === 'OK') {
      throw new Error('There is a problem with fetch data!');
    }
    return response;
  },
  function (error) {
    toast.error(
      'error in url: ' + error.config.url + ' response: ' + error.message
    );
    throw new Error(error.message);
  }
);
