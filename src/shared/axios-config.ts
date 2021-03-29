import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:3000" });

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  function (error) {
    console.log(error.response);
    return Promise.reject(error.response);
  }
);

export default client;
