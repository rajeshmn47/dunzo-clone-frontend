import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
    DELETE_CART,
  } from "../constants/cartConstants";
  import axios from "axios";
  
  // Add to Cart
  export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:9000/store/product/${id}`);
  console.log(data)
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.image,
        quantity, 
      },
    });
 dispatch({type:REMOVE_CART_ITEM,payload:{product:id}})
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  // REMOVE FROM CART
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  // SAVE SHIPPING INFO
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
  