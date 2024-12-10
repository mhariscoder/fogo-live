import React, { forwardRef, useEffect, useState } from "react";
import { Form, Image } from "react-bootstrap";
import { Controller } from "react-hook-form";

const ThemeFileUpload = forwardRef((props, ref) => {
    const {
        name,
        control,
        errors,
        rules = {},
        label = "",
        disabled = false,
        isLabel = false,
        minSize = 100,
        maxSize = 200000,
        className = "",
        as = "input",
        labelClassName,
        icon = null
    } = props;

    const [imageUrl, setImageUrl] = useState(null);

    const handleFileChange = (event, field) => {
        const file = event.target.files[0];
        if (file) {
            // Validate file size
            if (file.size < minSize || file.size > maxSize) return;
    
            // Generate object URL
            const objectUrl = URL.createObjectURL(file);
            setImageUrl(objectUrl);
    
            // Update the field value for React Hook Form
            field.onChange(file);
        }
    };

    return (
        <div className={`theme-input ${className}`}>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <>
                        <Form.Control
                            id={name}
                            type="file"
                            disabled={disabled}
                            onChange={(e) => handleFileChange(e, field)}
                            className="d-none"
                        />
                        {isLabel ? (
                            <div className="label-input-file-container">
                                <div className="label-input-file-first-section">
                                    <div className="label-input-box">
                                        <Form.Label htmlFor={name} className={`label-input-file ${labelClassName}`}>
                                            {icon && <Image src={icon} className="label-input-file-image" />}
                                        </Form.Label>
                                    </div>
                                    <Form.Label htmlFor={name} className={`label-input ${labelClassName}`}>
                                        {label}
                                    </Form.Label>
                                </div>
                                {imageUrl && (
                                    <div className="label-input-file-second-section">
                                        <Form.Label htmlFor={name} className="label-input text-light px-4">
                                            {imageUrl}
                                        </Form.Label>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </>
                )}
            />

            {errors[name] && (
                <span className="text-red validation-txt">{errors[name].message}</span>
            )}
        </div>
    );
});

export default ThemeFileUpload;