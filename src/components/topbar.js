import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { TextField, Badge } from "@material-ui/core";
import { AccountCircleOutlined, Search } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import AccountCircle from "@material-ui/icons/AccountCircle";

export const Topbar = ({ setLocation }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  console.log(user, 'useselector');
  console.log(cartItems);
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("Coordinates"));

  return (
    <>
      <div className="navbarcontainer">
        <div className="navbar">
          <div className="child" onClick={() => setLocation(true)}>
            <LocationOnIcon htmlColor="#00D290" />
            {data ? <p>{data.area}</p> : <p>Set Location</p>}
            <ExpandMoreOutlinedIcon htmlColor="#00D290" />
          </div>
          <div className="child">
            <Badge
              badgeContent={cartItems?.reduce((a, b) => a + b.quantity, 0)}
              color="error"
              onClick={() => navigate("/cart")}
              style={{ marginRight: "15px", fontSize: "14px" }}
            >
              <ShoppingCartOutlinedIcon style={{ fontSize: "18px" }} />
            </Badge>
            {user ? (
              <AccountCircleOutlined onClick={() => navigate("/profile")} style={{ margin: "0 5px" }} />
            ) : (
              <p onClick={() => navigate("/auth")}>Sign in</p>
            )}
            <MoreVertIcon />
          </div>
        </div>
        <div className="search">
          <TextField
            style={{
              width: "100%",
              height: "50px",
              padding: "1vmax",
              position: "relative",
              marginBottom: "3vh",
            }}
            variant="outlined"
            placeholder="search for item or a store"
            onClick={() => navigate("/search")}
          />
          <Search style={{ position: "absolute", top: "0px", right: "20px", fontWeight: "200" }} />
        </div>
      </div>
    </>
  );
};
export default Topbar;
