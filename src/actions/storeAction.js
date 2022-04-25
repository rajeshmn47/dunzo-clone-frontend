import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
    DELETE_CART,
    GET_STORE_DETAILS,
  } from "../constants/cartConstants";
  import axios from "axios";
  
// REMOVE FROM CART
export const  getstoredetails= (id) => async (dispatch, getState) => {
    const data=await axios.get(`https://dunzobackend.herokuapp.com/store/getstoredetails/${id}`)
    console.log(data)
    dispatch({
      type: GET_STORE_DETAILS,
      payload: data?.data.stores,
    });
  
  };
  

