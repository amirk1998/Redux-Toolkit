import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

axios.interceptors.request.use(
  (request) => {
    // console.log(request);
    return request;
  },
  (error) => {
    // console.log(error);
    Promise.reject();
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    Promise.reject();
  }
);

// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default http;
