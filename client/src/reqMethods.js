import axios from "axios";

const BAS_URL = "http://localhost:5000/";

// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accesstoken
// );
// const TOKEN = JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).currentUser
// ).accesstoken;
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accesstoken;

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTc3ODA1ZGY1ZTEwZjU2ZDgxOTc0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjEyOTY1OCwiZXhwIjoxNjQ2Mzg4ODU4fQ.NXKFDYRnfpVzkEvyWtjTMhTUSrPl3CdjtJCkvchVyMA";

export const publicRequest = axios.create({
  baseURL: BAS_URL,
});

export const userRequest = axios.create({
  baseURL: BAS_URL,
  header: { token: `Bearer ${TOKEN}` },
});
