import { forwardRef, useEffect, useRef } from "react";
// import "../../css/input.css";
import PropTypes from "prop-types";

const TextInput = forwardRef(
    (
        {
            type = "text",
            name,
            id,
            defaultValue,
            variant = "primary",
            placeholder = "",
            isError,
            className = "",
            isFocused = false,
            ...props
        },
        ref
    ) => {
        const inputRef = ref || useRef();

        useEffect(() => {
            if (isFocused) {
                inputRef.current.focus();
            }
        }, [isFocused]);

        return (
            <input
                {...props}
                type={type}
                name={name}
                id={id}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${
                    isError ? "input-error" : ""
                } ${className}`}
                ref={inputRef}
                placeholder={placeholder}
            />
        );
    }
);

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "password", "email", "number"]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
};

export default TextInput;
