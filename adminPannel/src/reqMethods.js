import axios from "axios";

const BAS_URL = "http://localhost:5000/";

// const TOKEN = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).currentUser
// ).accesstoken;

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accesstoken;

export const publicRequest = axios.create({
  baseURL: BAS_URL,
});

export const userRequest = axios.create({
  baseURL: BAS_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
