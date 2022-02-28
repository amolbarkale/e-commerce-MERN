import axios from "axios";

const BAS_URL = "http://localhost:5000/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTc3ODA1ZGY1ZTEwZjU2ZDgxOTc0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTk4MTY4NywiZXhwIjoxNjQ2MjQwODg3fQ.PYgfRSqybjAXnVfB-Hy9iqwniwMIm_CjUEqt1uNQtRQ";

export const publicRequest = axios.create({
  baseURL: BAS_URL,
});

export const userRequest = axios.create({
  baseURL: BAS_URL,
  header: { token: `Bearer ${TOKEN}` },
});
