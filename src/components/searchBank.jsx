import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { RiSearchLine } from "react-icons/ri";
import { selectContext } from "../context/context";
import { BankName } from "../utils/dummydata";

const SearchBank = ({ setSelectedBank }) => {
    const { watch, control } = useForm({ mode: "onChange" })
    const [select, setSelect] = useContext(selectContext)

    const searchText = watch("searchText")

    return (
        <div className="search-bank container mt-3">
            <div className="search">
                <Controller
                    control={control}
                    name="searchText"
                    render={({ field }) => (
                        <Form.Control
                            {...field}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className="form-input"
                        />
                    )}
                />
                <RiSearchLine size={20} className="custom-icon-search" />
            </div>
            <div className="bank-data">
                {BankName?.map((dt) => (
                    <div key={dt?.value} className="bank-name d-flex" onClick={() => { setSelectedBank(dt); setSelect(false) }}>
                        <img src={dt?.image} alt="bank-logo" className="image-fluid object-fit-contain" />
                        <h4>{dt?.label}</h4>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default SearchBank;