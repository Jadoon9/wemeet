import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3005",
});

const request = (method, url, params) => {
  return api.request({
    method,
    url,
    params,
  });
};

export default request;
