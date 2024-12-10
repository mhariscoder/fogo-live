import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";

const ThemeSelect = forwardRef((props, ref) => {
    const {
        name,
        control,
        errors,
        rules = {},
        label = "",
        placeholder = "",
        disabled = false,
        isLabel = false,
        className = "",
        labelClassName,
        options,
        onClick = () => { }
    } = props;

    return (
        <div className={`theme-select ${className}`} onClick={onClick}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <>
                        {isLabel ? (
                            <Form.Label className={`label-input ${labelClassName}`}>{label}</Form.Label>
                        ) : (
                            ""
                        )}
                        <Form.Select aria-label="Default select example" disabled={disabled}>
                            <option value="" disabled selected className="placeholder-option">{placeholder}</option>
                            {options?.map((op) => (
                                <option value={op?.value} key={op?.value}>{op?.label}</option>
                            ))}
                        </Form.Select>
                        <span className="custom-icon">
                            <FaChevronDown />
                        </span>
                    </>
                )}
            />
            {errors[name] && (
                <span className="text-red validation-txt">{errors[name].message}</span>
            )}
        </div>
    );
});

export default ThemeSelect;
