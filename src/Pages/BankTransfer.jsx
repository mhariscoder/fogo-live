import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import AccounAdded from "../components/offcanvasBody/AccountAdded";
import VerifyOTP from "../components/offcanvasBody/VerifyOtp";
import SearchBank from "../components/searchBank";
import FooterSaveButton from "../components/Theme/FooterButton";
import ThemeInput from "../components/Theme/ThemeInput";
import ThemeOffcanvas from "../components/Theme/ThemeOffcanvas";
import ThemeSelect from "../components/Theme/ThemeSelect";
import { PageNameContext, selectContext } from "../context/context";
import AppLayout from "../Layouts/AppLayout";
import { validation, validationText } from "../utils/app-constants";
import { info } from "../utils/helper";

const BankTransfer = () => {
    const {
        handleSubmit,
        control,
        reset,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    const [phone, setPhone] = useState(null);
    const [selectedBankType, setSelectedBankType] = useState(null)
    const [selectedBank, setSelectedBank] = useState(null)
    const [select, setSelect] = useContext(selectContext)
    const [page, setPage] = useContext(PageNameContext)
    const [otp, setOtp] = useState(null);
    const [show, setShow] = useState(false)
    const [addedSuccess, setAddedSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        if ((selectedBankType == 2 && !phone) || (selectedBankType == 2 && phone?.length < 12)) {
            info("Please Enter Phone Number")
            return
        }
        if (!selectedBank) {
            info("Please Select Bank")
            return
        }
        console.log(data);
        setLoading(true);
        setSelectedBank(null)
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
                {select ? <SearchBank setSelectedBank={setSelectedBank} /> :
                    <div className="bank-transfer mt-3">
                        <Form className="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="container">
                                <ThemeInput
                                    name="cardname"
                                    errors={errors}
                                    control={control}
                                    type={"text"}
                                    isLabel
                                    label="Cardholder’s Name"
                                    className={"Cardholder’s Name"}
                                    placeholder={"Name"}
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
                                <div className="choose mt-3">
                                    <p className="label-input">Choose:</p>
                                    <div className="mt-3">
                                        <Form.Check
                                            inline
                                            label="Bank Transfer"
                                            name="group1"
                                            type={"radio"}
                                            id={`1`}
                                            // defaultChecked={selectedBankType}
                                            onChange={(e) => setSelectedBankType(e?.target?.id)}
                                        />
                                        <Form.Check
                                            inline
                                            label="Local Transfer"
                                            name="group1"
                                            type={"radio"}
                                            id={`2`}
                                            // defaultChecked={selectedBankType}
                                            onChange={(e) => setSelectedBankType(e?.target?.id)}
                                        />
                                    </div>
                                </div>
                                <div className="select-bank mt-3">
                                    <p className="label-input">Bank Name</p>
                                    <ThemeSelect
                                        name="bankname"
                                        errors={errors}
                                        control={control}
                                        className=""
                                        // isLabel
                                        // label="Bank Name"
                                        options={[]}
                                        disabled={true}
                                        placeholder={selectedBank ? selectedBank?.label : "Select"}
                                        onClick={() => { setSelect(true); setPage("Bank Name") }}
                                    />
                                </div>

                                {selectedBankType == 2 ?
                                    <PhoneInput
                                        className="mt-3"
                                        specialLabel="11 digit Number"
                                        country={'pk'}
                                        value={phone}
                                        onChange={(e) => setPhone(e)}
                                        placeholder="+92 xxx xxxxxxx"
                                    /> :
                                    <ThemeInput
                                        name="iban"
                                        errors={errors}
                                        control={control}
                                        type={"text"}
                                        isLabel
                                        label="24 Digital IBAN Number"
                                        className={"mt-3"}
                                        placeholder={"PBAF456789056781212"}
                                        maxLength={validation.ibannumber}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: validationText.general,
                                            },
                                            maxLength: {
                                                value: validation.ibannumber,
                                                message: validationText.ibannumber,
                                            },
                                        }}
                                    />
                                }

                                <ThemeInput
                                    name="cnic"
                                    errors={errors}
                                    control={control}
                                    type={"number"}
                                    isLabel
                                    label="CNIC"
                                    className={"mt-3"}
                                    placeholder={"***** ********"}
                                    maxLength={validation.cnic}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: validationText.general,
                                        },
                                        minLength: {
                                            value: validation.cnicMin,
                                            message: validationText.cnicMin,
                                        },

                                        maxLength: {
                                            value: validation.cnic,
                                            message: validationText.cnicMax,
                                        },
                                        // validate: {
                                        //     hasNumber: (value) =>
                                        //         /^\d{5}-\d{7}-\d{1}$/.test(value) || "Please Enter Correct NIC.",
                                        // },
                                    }}
                                />
                                <ThemeInput
                                    name="notes"
                                    errors={errors}
                                    control={control}
                                    type={"text"}
                                    isLabel
                                    label="Notes"
                                    className={"mt-3"}
                                    placeholder={"Notes"}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: validationText.general,
                                        },
                                        maxLength: {
                                            value: validation.messageMax,
                                            message: validationText.messageMax,
                                        },
                                    }}
                                />
                            </div>
                            <FooterSaveButton disabled={loading} />
                        </Form>
                    </div>
                }
            </AppLayout>
            <ThemeOffcanvas show={show} onHide={() => { setShow(!show); setOtp(null) }} body={addedSuccess ? <AccounAdded setAddedSuccess={setAddedSuccess} setShow={setShow} /> : <VerifyOTP otp={otp} setOtp={setOtp} setShow={setShow} handleSubmit={handleOtp} />} />
        </>
    )
}
export default BankTransfer