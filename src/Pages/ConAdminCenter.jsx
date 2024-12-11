import React, { useContext, useState } from "react";
import { Form, Container, Row, Col, Card, Image, Button, Tab, Tabs } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import AccounAdded from "../components/offcanvasBody/AccountAdded";
import VerifyOTP from "../components/offcanvasBody/VerifyOtp";
import SearchBank from "../components/searchBank";
import FooterSaveButton from "../components/Theme/FooterButton";
import ThemeInput from "../components/Theme/ThemeInput";
import ThemeOffcanvas from "../components/Theme/ThemeOffcanvas";
import ThemeSelect from "../components/Theme/ThemeSelect";
import ThemeFileUpload from "../components/Theme/ThemeFileUpload";
import { PageNameContext, selectContext } from "../context/context";
import AppLayout from "../Layouts/AppLayout";
import { validation, validationText } from "../utils/app-constants";
import { info } from "../utils/helper";
import UserCard from "./../components/UserCard";
import MyAdmins from "./ConAdminCenter/MyAdmins";
import MyAgency from "./ConAdminCenter/MyAgency";

const ConAdminCenter = () => {
    const [adminTab, setAdminTab] = useState('my-admins');

    const onSubmit = () => {
        
    }

    return (
        <>
            <AppLayout isFooter handleClick={onSubmit} style={{backgroundColor: "#efefef"}}>
                <div className="container mt-3">
                    <UserCard 
                        title={`Admin Name Here`} 
                        description={`ID 3023565256`}
                        image={require('./../assets/images/person-1.png')}
                        className={`mb-3 border-0`}
                    />

                    <div className="mb-3">
                        <Tabs activeKey={adminTab} onSelect={(k) => setAdminTab(k)} className="admin-tabs">
                            <Tab eventKey="my-admins" title="My Admins ( 5 )">
                                <MyAdmins />
                            </Tab>
                            <Tab eventKey="my-agency" title="My Agency ( 3 )">
                                <MyAgency />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </AppLayout>
        </>
    )
}
export default ConAdminCenter;