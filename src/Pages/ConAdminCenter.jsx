import React, { useContext, useState } from "react";
import { Form, Container, Row, Col, Card, Image, Button, Flex } from "react-bootstrap";
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

const ConAdminCenter = () => {
    const onSubmit = () => {

    }

    return (
        <>
            <AppLayout isFooter handleClick={onSubmit}>
                <div className="container mt-3">
                    <Card>
                        <Card.Body>
                            <div className="admin-card-container">
                                <div className="admin-card-image-box">
                                            
                                </div>
                                <div className="admin-card-content-box">
                                    <Card.Title className="title">Admin Name Here</Card.Title>
                                    <Card.Text className="description">ID 3023565256 <Image src={require('./../assets/images/document-copy.png')} /></Card.Text>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </AppLayout>
        </>
    )
}
export default ConAdminCenter;