import "./cart.css";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartitem";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Room } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Payment from "./payment";

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const address = localStorage.getItem("storeinfo");
  const { cartItems } = useSelector((state) => state.cart);
  const adress = localStorage.getItem("adress")
    ? JSON.parse(localStorage.getItem("adress"))
    : false;
  const [user, setUser] = useState();
  const storeinfo = localStorage.getItem("storeinfo")
    ? JSON.parse(localStorage.getItem("storeinfo"))
    : false;
  const total = cartItems.reduce((b, c) => c.quantity * c.price + b, 0);
  const addressinfo = localStorage.getItem("Address")
    ? JSON.parse(localStorage.getItem("Address"))
    : false;
  const dat = localStorage.getItem("Coordinates")
    ? JSON.parse(localStorage.getItem("Coordinates"))
    : false;
  console.log(addressinfo, dat, "raz");
  return (
    <>
      <div className="cart">
        {cartItems.length > 0 ? (
          <>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1vmax",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <KeyboardBackspaceIcon onClick={() => navigate("/")} />
                  <h5 style={{ marginLeft: "1vw" }}>Confirm Order</h5>
                </div>
                <div>
                  {user ? (
                    <button className="profile">
                      <h5>Profile</h5>
                    </button>
                  ) : (
                    <button className="login">Login</button>
                  )}
                </div>
              </div>

              <div className="storein">
                <h5>{storeinfo.title}</h5>
                <button className="addmore">+ Add More</button>
              </div>
              <div className="cartitems">
                {cartItems?.map((c) => (
                  <CartItem c={c} />
                ))}
              </div>
              <div className="f"></div>
            </div>
            <div>
              {!(addressinfo && dat) ? (
                <div className="addadr">
                  <button
                    className="paybtn"
                    onClick={() => navigate("/addadress")}
                  >
                    Add more details
                  </button>
                </div>
              ) : (
                <>
                  <div
                    style={{
                      marginLeft: "0px",

                      borderRadius: "0px",
                      backgroundColor: "#F5FBFF",
                      display: "flex",
                      padding: "2vh 1vw",
                      boxSizing: "border-box",
                      borderBottom: "1px solid #CCCCCC",
                      alignItems: "center",
                    }}
                    onClick={() => navigate("/map")}
                  >
                    <HomeIcon htmlColor="#00B37A" />
                    <h5 style={{ display: "inline-block", marginLeft: "2vw" }}>
                      {dat?.place_name?.length > 47
                        ? dat?.place_name?.slice(0, 46)
                        : dat?.place_name}
                      ...
                    </h5>
                    <KeyboardArrowDownIcon htmlColor="#00B37A" />
                  </div>
                  <Payment />
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "1vmax",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <KeyboardBackspaceIcon />
                <h5 style={{ marginLeft: "1vw" }}>Confirm Order</h5>
              </div>
              <div>
                {user ? (
                  <button className="profile">
                    <h5>Profile</h5>
                  </button>
                ) : (
                  <button className="login">Login</button>
                )}
              </div>
            </div>

            <div className="nocart">
              <ShoppingCartOutlinedIcon style={{ height: "5vh" }} />
              <h5>no items in the cart yet</h5>
              <button className="paybtn">Start Shopping</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
