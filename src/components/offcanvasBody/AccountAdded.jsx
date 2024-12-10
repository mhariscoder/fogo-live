import React from "react";
import { Button } from "react-bootstrap";
import { AddedAccount } from "../../utils/svg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/app-constants";

const AccounAdded = ({ setAddedSuccess, setShow }) => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(ROUTES.myAccounts)
        setShow(false);
        setAddedSuccess(false);
    }
    return (
        <div className="verify-otp d-flex flex-column">
            <div className="devider" onClick={() => { setShow(false) }}>
                <span className="line"></span>
            </div>
            <div className="icon">
                <AddedAccount />
            </div>
            <h2>Bank Account Added Successfully</h2>
            <div className="para">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center">
                <Button className="theme-btn" onClick={handleSubmit}>Done</Button>
            </div>
        </div>
    )
}

export default AccounAdded;