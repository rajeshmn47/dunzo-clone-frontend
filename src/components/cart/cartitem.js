import { addItemsToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export const CartItem = ({ c }) => {
  const [qty, setqty] = useState(0);
  const dispatch = useDispatch();
  const handleInc = (id) => {
    setqty(qty + 1);
    dispatch(addItemsToCart(id, c.quantity + 1));
  };

  const handleDec = (id) => {
    setqty(qty - 1);
    if (c.quantity - 1 > -1) {
      dispatch(addItemsToCart(id, c.quantity - 1));
    }
  };
  return (
    <>
      <div className="cartitem">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="dot"></div>
          <h5>{c.name}</h5>
        </div>
        <div className="added">
          <button className="smalladd" onClick={() => handleInc(c.product)}>
            {" "}
            +{" "}
          </button>
          {c.quantity}
          <button className="smalladd" onClick={() => handleDec(c.product)}>
            {" "}
            -{" "}
          </button>
        </div>
        <h5>₹{c.price * c.quantity}</h5>
      </div>
    </>
  );
};

export default CartItem;
