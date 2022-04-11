import React, { useEffect, useState } from 'react';
import { firebase } from '../../firebase';
import { getAuth, signInWithPhoneNumber,RecaptchaVerifier  } from "firebase/auth";

  
const Otpauth = () => {
    // Inputs
    const [mynumber, setnumber] = useState("");
	const auth=getAuth()
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

	useEffect(()=>{

	window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
		'size': 'invisible',
		'callback': (response) => {
		  // reCAPTCHA solved, allow signInWithPhoneNumber.
		  console.log(response)
		}
	  }, auth);
	},[])
  
    // Sent OTP
    const signin = () => {
  
        if (mynumber === "" || mynumber.length < 10) return;
  
        const verify = window.recaptchaVerifier
        signInWithPhoneNumber(auth,mynumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }
  
    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
			console.log(result)
        }).catch((err) => {
            alert("Wrong code");
        })
    }
  
    return (
        <div style={{ "marginTop": "200px" }}>
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                    <input value={mynumber} onChange={(e) => { 
                       setnumber(e.target.value) }}
                        placeholder="phone number" />
                    <br /><br />
                    <div id="recaptcha-container"></div>
                    <button onClick={signin}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />
                    <button id='sign-in-button' onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
        </div>
    );
}
  
export default Otpauth;