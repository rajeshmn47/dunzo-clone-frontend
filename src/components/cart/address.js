import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import "./cart.css";
import Addaddress from "./locationaddress";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import { useNavigate } from "react-router-dom";

export const Address = () => {
  const navigate = useNavigate();
  return (
    <>
      <Addaddress />
      <div style={{ display: "flex", alignItems: "center" }}>
        <button className="mylocationbtn" onClick={() => navigate("/map")}>
          <MyLocationIcon htmlColor="#00D290" style={{ marginRight: "2vw" }} />
          Use The Current Location
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://resources.dunzo.com/web-assets/prod/_next/static/images/select-location-empty-f4498251f7f489a59aef4af4e7d3b68e.png"
          width="50%"
          height="50%"
        />
      </div>
    </>
  );
};

export default Address;
