import React, { useContext, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
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

const BecomeSuperAdmin = () => {
    const {
        handleSubmit,
        control,
        reset,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    const [phone, setPhone] = useState(null);
    
    const [select, setSelect] = useContext(selectContext)
    const [page, setPage] = useContext(PageNameContext)
    const [otp, setOtp] = useState(null);
    const [show, setShow] = useState(false)
    const [addedSuccess, setAddedSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        
        console.log(data);
        setLoading(true);

        setPhone(null)
        setShow(true)
        // navigate(ROUTES.myAccounts)
        reset();
    };
    const handleOtp = () => {
        if (!otp || otp?.length < 5) {
            info("Please Enter Valid OTP")
            return
        }
        console.log(otp);
        setAddedSuccess(true)
        setOtp(null)
    }

    return (
        <>
            <AppLayout isFooter handleClick={onSubmit}>
                <div className="bank-transfer mt-3">
                    <Form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="container">
                            <Row>
                                <Col xs={12}>
                                    <label>Upload Images</label>
                                </Col>

                                <Col xs={6}>
                                    <ThemeFileUpload
                                        name="uploadImage"
                                        errors={errors}
                                        control={control}
                                        isLabel
                                        label="Upload Image"
                                        className={"mt-3"}
                                        icon={require('./../assets/images/gallery-add.png')}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: validationText.general,
                                            }
                                        }}
                                    />
                                </Col>
                                <Col xs={6}>
                                    <ThemeFileUpload
                                        name="uploadVideo"
                                        errors={errors}
                                        control={control}
                                        isLabel
                                        label="Upload Video"
                                        className={"mt-3"}
                                        icon={require('./../assets/images/video.png')}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: validationText.general,
                                            }
                                        }}
                                    />
                                </Col>
                            </Row>

                            <ThemeInput
                                name="officialId"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="Official Id (provided by Fogo)"
                                className={"mt-3"}
                                placeholder={"Please Input the agency ID"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    minLength: {
                                        value: validation.nameMin,
                                        message: validationText.nameMin,
                                    },
                                    maxLength: {
                                        value: validation.nameMax,
                                        message: validationText.nameMax,
                                    },
                                }}
                            />

                            <ThemeInput
                                name="superAdminName"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="Super Admin Name"
                                className={"mt-3"}
                                placeholder={"Type here"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    minLength: {
                                        value: validation.nameMin,
                                        message: validationText.nameMin,
                                    },
                                    maxLength: {
                                        value: validation.nameMax,
                                        message: validationText.nameMax,
                                    },
                                }}
                            />

                            <ThemeInput
                                name="fullNameAsPerNic"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="Real full name according to the CNIC"
                                className={"mt-3"}
                                placeholder={"Type here"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    minLength: {
                                        value: validation.nameMin,
                                        message: validationText.nameMin,
                                    },
                                    maxLength: {
                                        value: validation.nameMax,
                                        message: validationText.nameMax,
                                    },
                                }}
                            />

                            <PhoneInput
                                className="mt-3"
                                specialLabel="Your Contact/WhatsApp Number"
                                country={'pk'}
                                value={phone}
                                onChange={(e) => setPhone(e)}
                                placeholder="Type here"
                            />

                            <ThemeInput
                                name="eMail"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="E-Mail"
                                className={"mt-3"}
                                placeholder={"Type here"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    maxLength: {
                                        value: validation.emailMax,
                                        message: validationText.nameemailMax,
                                    },
                                }}
                            />

                            <ThemeInput
                                name="admin"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="How many Admins do you have?"
                                className={"mt-3"}
                                placeholder={"Admin"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    minLength: {
                                        value: validation.nameMin,
                                        message: validationText.nameMin,
                                    },
                                    maxLength: {
                                        value: validation.nameMax,
                                        message: validationText.nameMax,
                                    },
                                }}
                            />

                            <ThemeInput
                                name="agency"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="How many Agencies do you have"
                                className={"mt-3"}
                                placeholder={"Agency"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    minLength: {
                                        value: validation.nameMin,
                                        message: validationText.nameMin,
                                    },
                                    maxLength: {
                                        value: validation.nameMax,
                                        message: validationText.nameMax,
                                    },
                                }}
                            />

                            <Row className={`mt-3`}>
                                <Col xs={12}>
                                    <label>Upload CNIC*</label>
                                </Col>
                                <Col xs={6}>
                                    <ThemeFileUpload
                                        name="uploadFrontCnic"
                                        errors={errors}
                                        control={control}
                                        isLabel
                                        label="Front"
                                        icon={require('./../assets/images/gallery-add.png')}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: validationText.general,
                                            }
                                        }}
                                    />
                                </Col>
                                <Col xs={6}>
                                    <ThemeFileUpload
                                        name="uploadBackCnic"
                                        errors={errors}
                                        control={control}
                                        isLabel
                                        label="Back"
                                        icon={require('./../assets/images/gallery-add.png')}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: validationText.general,
                                            }
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className={`mt-3`}>
                                <Col xs={12}>
                                    <label>Utility Bills*</label>
                                </Col>
                                <Col xs={12}>
                                    <ThemeFileUpload
                                        name="utilityBills"
                                        errors={errors}
                                        control={control}
                                        isLabel
                                        label="Add Images"
                                        icon={require('./../assets/images/gallery-add.png')}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: validationText.general,
                                            }
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className={`mt-3`}>
                                <Col xs={6}>
                                    <ThemeInput
                                        name="city"
                                        errors={errors}
                                        control={control}
                                        type={"text"}
                                        isLabel
                                        label="City"
                                        className={"mt-3"}
                                        placeholder={"Add Here"}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: validationText.general,
                                            },
                                            minLength: {
                                                value: validation.nameMin,
                                                message: validationText.nameMin,
                                            },
                                            maxLength: {
                                                value: validation.nameMax,
                                                message: validationText.nameMax,
                                            },
                                        }}
                                    />
                                </Col>
                                <Col xs={6}>
                                    <ThemeInput
                                        name="zipCode"
                                        errors={errors}
                                        control={control}
                                        type={"text"}
                                        isLabel
                                        label="Zip Code"
                                        className={"mt-3"}
                                        placeholder={"Add Here"}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: validationText.general,
                                            },
                                            minLength: {
                                                value: validation.nameMin,
                                                message: validationText.nameMin,
                                            },
                                            maxLength: {
                                                value: validation.nameMax,
                                                message: validationText.nameMax,
                                            },
                                        }}
                                    />
                                </Col>
                            </Row>

                            <ThemeInput
                                name="whatsAppCode"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="WhatsApp Code"
                                className={"mt-3"}
                                placeholder={"Type here"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    minLength: {
                                        value: validation.nameMin,
                                        message: validationText.nameMin,
                                    },
                                    maxLength: {
                                        value: validation.nameMax,
                                        message: validationText.nameMax,
                                    },
                                }}
                            />

                            <ThemeInput
                                name="bankName"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="Bank Name"
                                className={"mt-3"}
                                placeholder={"Type here"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    minLength: {
                                        value: validation.nameMin,
                                        message: validationText.nameMin,
                                    },
                                    maxLength: {
                                        value: validation.nameMax,
                                        message: validationText.nameMax,
                                    },
                                }}
                            />

                            <ThemeInput
                                name="ibnNumber"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="IBN Number"
                                className={"mt-3"}
                                placeholder={"Type here"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    minLength: {
                                        value: validation.nameMin,
                                        message: validationText.nameMin,
                                    },
                                    maxLength: {
                                        value: validation.nameMax,
                                        message: validationText.nameMax,
                                    },
                                }}
                            />

                            <ThemeInput
                                name="bankAddress"
                                errors={errors}
                                control={control}
                                type={"text"}
                                isLabel
                                label="Bank Address"
                                className={"mt-3"}
                                placeholder={"Type here"}
                                rules={{
                                    required: {
                                        value: true,
                                        message: validationText.general,
                                    },
                                    minLength: {
                                        value: validation.nameMin,
                                        message: validationText.nameMin,
                                    },
                                    maxLength: {
                                        value: validation.nameMax,
                                        message: validationText.nameMax,
                                    },
                                }}
                            />
                        </div>
                        <FooterSaveButton disabled={loading} />
                    </Form>
                </div>
            </AppLayout>
        </>
    )
}
export default BecomeSuperAdmin;