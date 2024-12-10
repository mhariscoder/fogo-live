import React from "react";
import { Button } from "react-bootstrap";
import OTPInput from "react-otp-input";
import { VerifyOTPIcon } from "../../utils/svg";

const VerifyOTP = ({ otp, setOtp, setShow, handleSubmit = () => { } }) => {

    return (
        <div className="verify-otp d-flex flex-column">
            <div className="devider" onClick={() => { setOtp(null); setShow(false) }}>
                <span className="line"></span>
            </div>

            <h2>Enter Verification PIN</h2>
            <div className="icon">
                <VerifyOTPIcon />
            </div>
            <div className="para">
                <p>Verification code will be sent to your phone account. Please enter the verification code received within 2minutes.
                    <span className="ms-2">9231****4122</span></p>
            </div>
            <div className="otp w-100 d-flex justify-content-center align-items-center">
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    renderSeparator={<span> </span>}
                    renderInput={(props) => <input {...props} />}
                />
            </div>
            <div className="resend-otp">
                Haven’t received code?<span className="ms-2">Resend</span>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center">
                <Button className="theme-btn" onClick={handleSubmit}>Done</Button>
            </div>
        </div>
    )
}

export default VerifyOTP;