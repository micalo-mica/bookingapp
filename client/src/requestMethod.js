import axios from "axios";

const BASE_URL = "http://localhost:8800/api";

export const publicRequest = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//   Accept: 'application/json'
// },
// });
