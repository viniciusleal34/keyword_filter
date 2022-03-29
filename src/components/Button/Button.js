import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    type,
    variant,
    icon,
    className,
    text,
    arrow,
    size,
    disabled,
    children,
    iconOnly = false,
    ariaLabel = 'bds-button',
    dataTestId = 'bds-button',
    onClick = () => {}
}) => !!iconOnly ? (
    <bds-button-icon
        data-testid={dataTestId}
        aria-label={ariaLabel}
        type={type}
        icon={icon}
        class={className}
        variant={variant}
        size={size}
        arrow={arrow}
        disabled={disabled}
        onClick={onClick}
    />
) : (
    <bds-button
        data-testid={dataTestId}
        aria-label={ariaLabel}
        type={type}
        icon={icon}
        class={className}
        variant={variant}
        size={size}
        arrow={arrow}
        disabled={disabled}
        onClick={onClick}
    >
        {!!text ? text : children}
    </bds-button>
);

Button.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string,
    arrow: PropTypes.bool,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.any,
    iconOnly: PropTypes.bool,
    ariaLabel: PropTypes.string,
    dataTestId: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
