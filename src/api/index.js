import axios from "axios";
const { accessToken } = JSON.parse(localStorage.getItem("user"));

const BASE_URL = "http://localhost:3005";
const headers = {
  "Content-Type": "application/json",
  ...(accessToken && { Authorization: `Bearer ${accessToken}` }),

  // Authorization: "JWT fefege...",
};

const api = axios.create({
  baseURL: BASE_URL,
  headers,
});

// api.interceptors.request.use(
//   (config) => {
//     const { accessToken } = JSON.parse(localStorage.getItem("user"));
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => {
//     localStorage.setItem(JSON.stringify(response.data));
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       // localStorage.removeItem("token");
//       window.location.href = "/login";
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export const checkTokenExpiration = () => {
  const expiresAt = localStorage.getItem("expires_at");
  if (expiresAt && new Date().getTime() > expiresAt) {
    return true;
  }
  return false;
};

export const refreshToken = async () => {
  const { accessToken } = JSON.parse(localStorage.getItem("user"));

  console.log(accessToken, "accessToken");
  const response = await api.post("/refresh_token", {
    accessToken,
    withCredentials: true,
  });

  const { access_token, expires_in } = response.data;
  localStorage.setItem("token", access_token);
  localStorage.setItem("expires_at", expires_in);

  return response;
};

export default api;
