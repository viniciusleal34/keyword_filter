/* eslint-disable react/no-array-index-key */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Select = ({
    placeholder,
    icon,
    value = '',
    options = [],
    debounceTime = 500,
    disabled = false,
    onChange = () => {},
    dataTestId="bds-select"
}) => {
    const blipSelectRef = useRef(null);
    let time;

    useEffect(() => {
        const { current } = blipSelectRef;
        current.addEventListener('bdsBlur', handleChange);

        return () => {
            current.removeEventListener('bdsBlur', handleChange);
        };
        // eslint-disable-next-line
    }, []);

    const handleChange = (e) => {
        clearTimeout(time);
        time = setTimeout(() => onChange(e), debounceTime);
    };

    return (
        <bds-select
            ref={blipSelectRef}
            data-testid={dataTestId}
            icon={icon}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
        >
            {!!options?.length &&
                options.map((option, index) => (
                    <bds-select-option
                        key={`${index}_${option.value}`}
                        value={option.value}
                        title-text={option?.title}
                    >
                        {option?.label}
                    </bds-select-option>
                ))}
        </bds-select>
    );
};

Select.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array,
    debounceTime: PropTypes.number,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    dataTestId: PropTypes.string
};
