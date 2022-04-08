import {
    GET_STORE_DETAILS,
  } from "../constants/cartConstants";
  
  export const storeReducer = (
    state = { storedata: []},
    action
    ) => {
      switch (action.type) {
        case GET_STORE_DETAILS:
            return {
              ...state,
              storedata: action.payload
            };
            default:
            return state;
          }
      
        }