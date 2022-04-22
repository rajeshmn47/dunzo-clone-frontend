import axios from 'axios'
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  REGISTER_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_FAIL,
} from '../constants/cartConstants'

const headers = {
  Accept: 'application/json',
}
export const register = (myform) => async (dispatch) => {
  try {
    console.log(myform)
    dispatch({ type: REGISTER_USER_REQUEST })
    const { data } = await axios.post(
      'https://stackoverflowclonerajesh.herokuapp.com/auth/register',
      { myform }
    )
    console.log(data)
    localStorage.setItem('server_token', data.server_token)
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })
  } catch (error) {
    console.log(error.response, 'asdfgh')
    dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.message })
  }
}

export const login = (myform) => async (dispatch) => {
  try {
    console.log(myform)
    dispatch({ type: LOGIN_REQUEST })
    const { data } = await axios.post(
      'https://stackoverflowclonerajesh.herokuapp.com/auth/login',
      { myform }
    )
    console.log(data)
    localStorage.setItem('server_token', data.server_token)
    dispatch({ type: LOGIN_SUCCESS, payload: data.user })
  } catch (error) {
    console.log(error.response, 'asdfgh')
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
  }
}

export const loadUser = () => async (dispatch,user) => {
  try {
    dispatch({ type: LOAD_USER_SUCCESS, payload:user})
    }
   catch (error) {
    console.log(error)
  }
}
