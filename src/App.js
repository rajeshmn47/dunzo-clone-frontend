import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/topbar";
import Home from "./components/home";
import Signin from "./components/signin";
import Searc from "./components/search/Tearch";
import Setlocation from "./components/location/Setlocation";
import Cart from "./components/cart/Cart";
import Address from "./components/cart/address";
import Storedetails from "./components/search/storedetails";
import Profile from "./components/user/profile";
import Otpauth from "./components/authentication/Otpauthentication";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { auth } from "./firebase";
import { useState, useEffect } from "react";
import Tap from "./components/cart/map";
import AddDetails from "./components/cart/adddetails";
import Confirmation from "./components/confirmation";
import { useDispatch } from "react-redux";
import { loadUser, logoutUser } from "./actions/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser, "ok good bro");

        dispatch(loadUser(authUser));
      } else {
        dispatch(logoutUser());
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Searc />} />
          <Route path="/set-location" element={<Setlocation />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/store/:id" element={<Storedetails />} />
          <Route path="/auth" element={<Otpauth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addadress" element={<Address />} />
          <Route path="/map" element={<Tap />} />
          <Route path="/adddetails" element={<AddDetails />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
