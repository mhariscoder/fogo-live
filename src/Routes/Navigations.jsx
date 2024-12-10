import React from "react";
import { Route, Routes } from "react-router-dom";
import BankTransfer from "../Pages/BankTransfer";
import { ROUTES } from "../utils/app-constants";
import MyAccount from "../Pages/MyAccounts";
import BecomeSuperAdmin from "../Pages/BecomeSuperAdmin";
import ConAdminCenter from "../Pages/ConAdminCenter";

const Navigations = () => {
    return (
        <>
            <Routes>
                <Route element={<BankTransfer />} path={ROUTES.bankTransfer}></Route>
                <Route element={<MyAccount />} path={ROUTES.myAccounts}></Route>
                <Route element={<BecomeSuperAdmin />} path={ROUTES.becomeSuperAdmin}></Route>
                <Route element={<ConAdminCenter />} path={ROUTES.home}></Route>
            </Routes>
        </>
    )
}

export default Navigations;