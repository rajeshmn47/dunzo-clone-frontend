import axios from "axios";
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  REGISTER_USER_FAIL,
  LOGOUT_SUCCESS,
  LOAD_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_FAIL,
  URL,
} from "../constants/cartConstants";

const headers = {
  Accept: "application/json",
};
export const register = (myform) => async (dispatch) => {
  try {
    console.log(myform);
    dispatch({ type: REGISTER_USER_REQUEST });
    const { data } = await axios.post(`${URL}/auth/register`, { myform });
    console.log(data);
    localStorage.setItem("server_token", data.server_token);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    console.log(error.response, "asdfgh");
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const login = (myform) => async (dispatch) => {
  try {
    console.log(myform);
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(`${URL}/auth/login`, { myform });
    console.log(data);
    localStorage.setItem("server_token", data.server_token);
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    console.log(error.response, "asdfgh");
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

export const loadUser = (user) => async (dispatch) => {
  try {
    console.log('loading user',user)
    dispatch({ type: LOAD_USER_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
  }
};
