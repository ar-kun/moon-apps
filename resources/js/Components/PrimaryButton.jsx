import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
};

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    variant = "primary",
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full ${
                    disabled && "opacity-25"
                } btn-${variant}` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
