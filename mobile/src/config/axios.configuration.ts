import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.0.2.2/api' || 'http://0.0.0.0/api',
});

const configuration = {
  timeoutErrorMessage:
    'Looks like the server is taking to long to respond, please try again in sometime.',
  timeout: 5000,
};

export const TransactionAPI = {
  get: async endPoint => {
    return instance
      .get(endPoint, configuration)
      .then(response => response)
      .catch(error => Promise.reject(error));
  },

  post: async (endPoint, data) => {
    return instance
      .post(endPoint, data, configuration)
      .then(response => response)
      .catch(error => Promise.reject(error));
  },
};
