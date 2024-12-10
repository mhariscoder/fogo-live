import React from "react";
import TopBar from "../components/Theme/TopBar";

const AppLayout = ({ children }) => {
    return (
        <>
            <div className="app-layout">
                <TopBar />
                <div className="children">{children}</div>
            </div>
        </>
    )
};

export default AppLayout;