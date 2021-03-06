import { loginStart } from "./userRedux";
import { loginFailure } from "./userRedux";
import { loginSuccess } from "./userRedux";
import { publicRequest } from "../reqMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
