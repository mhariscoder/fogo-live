import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";

const ThemeInput = forwardRef((props, ref) => {
    const {
        name,
        control,
        errors,
        rules = {},
        label = "",
        placeholder = "",
        type = "text",
        disabled = false,
        isLabel = false,
        minLength = 0,
        maxLength = 255,
        className = "",
        as = "input",
        labelClassName,
    } = props;

    return (
        <div className={`theme-input ${className}`}>
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
                        <Form.Control
                            {...field}
                            type={type}
                            placeholder={placeholder}
                            disabled={disabled || false}
                            value={field.value || ""}
                            onChange={field.onChange}
                            minLength={minLength}
                            maxLength={maxLength}
                            as={as}
                            autoComplete="off" // This disables autocomplete
                        />
                    </>
                )}
            />
            {errors[name] && (
                <span className="text-red validation-txt">{errors[name].message}</span>
            )}
        </div>
    );
});

export default ThemeInput;
