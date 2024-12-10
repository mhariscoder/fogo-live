import React, { useContext } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

import { PageNameContext, selectContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
    const [page, setPage] = useContext(PageNameContext)
    const [select, setSelect] = useContext(selectContext)
    const navigate = useNavigate()

    const handleBack = () => {
        if(select === true){
            setSelect(false);
            setPage("Bank Transfer")
        }
        else{
            navigate(-1);
        }
    };
    return (
        <div className="top-bar flex-custom-space-start">
            <MdKeyboardBackspace size={24} onClick={handleBack} />
            <h1 className="ms-3">{page}</h1>
        </div>
    )
};


export default TopBar;