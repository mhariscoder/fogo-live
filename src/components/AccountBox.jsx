import React from "react";
import { Form } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import profile from "../assets/images/profile.png";
import { Edit } from "../utils/svg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/app-constants";


const AccountBox = ({ className, group, id }) => {
    const navigate = useNavigate()
    const handleDivClick = () => {
        const radioButton = document.getElementById(id);
        if (radioButton) {
            radioButton.checked = true;
            // radioButton.dispatchEvent(new Event("change", { bubbles: true }));
        }
    };

    return (
        <div className={`account-detail ${className}`} onClick={handleDivClick}>
            <div className="icons flex-custom-space-between">
                <Form.Check
                    inline
                    label=""
                    name={group}
                    type={"radio"}
                    id={id}
                    defaultChecked={false}
                // onChange={(e) => setSelectedBankType(e?.target?.id)}
                />
                <div className="flex-custom-space-between">
                    <div onClick={(e) => { e.stopPropagation(); navigate(ROUTES?.bankTransfer) }}>
                        <Edit />
                    </div>
                    <RxCross2 size={18} className="ms-2" />
                </div>
            </div>
            <div className="details d-flex align-items-center mt-1">
                <img src={profile} className="image-fluid object-fit-contain" />
                <div className="heading ms-2 d-flex flex-column">
                    <p>Account Name:</p>
                    <p>Bank Name:</p>
                    <p>Account Number:</p>
                </div>
                <div className="content ms-3 d-flex flex-column">
                    <p>MIGO LIVE PK</p>
                    <p>EasyPaisa</p>
                    <p>8765432345678</p>
                </div>
            </div>
        </div>
    )
}

export default AccountBox;