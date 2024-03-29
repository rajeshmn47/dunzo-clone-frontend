import React, { useEffect, useState } from "react";
import { firebase } from "../../firebase";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const Otpauth = () => {
  // Inputs
  const [mynumber, setnumber] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response);
        },
      },
      auth
    );
  }, []);

  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;

    const verify = window.recaptchaVerifier;
    let num = `+91${mynumber}`
    signInWithPhoneNumber(auth, num, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        alert("successfully logged in");
        navigate('/')
        console.log(result);
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <center>
        <div style={{ display: !show ? "block" : "none" }}>
          <input
            value={mynumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            placeholder="enter 10 digit phone number"
            style={{ padding: "5px 5px" }}
          />
          <br />
          <br />
          <div id="recaptcha-container"></div>
          <button onClick={signin} style={{ padding: "5px" }}>Send OTP</button>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <input
            type="text"
            placeholder={"Enter your OTP"}
            onChange={(e) => {
              setotp(e.target.value);
            }}
            style={{ padding: "5px" }}
          ></input>
          <br />
          <br />
          <button id="sign-in-button" onClick={ValidateOtp} style={{ padding: "5px" }}>
            Verify
          </button>
        </div>
      </center>
    </div>
  );
};

export default Otpauth;
