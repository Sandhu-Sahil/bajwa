import React from 'react';
import PropTypes from 'prop-types';

const shapes = {
    round: 'rounded-[30px]',
};

const variants = {
    fill: {
        white_A700: 'bg-white-a700 shadow-xs text-indigo-900',
    },
};

const sizes = {
    xs: 'h-[62px] px-[34px] text-[27px]',
};

const Button = ({ children, className = '', leftIcon, rightIcon, shape, variant = 'fill', size = 'xs', color = 'white_A700', ...restProps }) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center sm:px-5 text-center cursor-pointer whitespace-nowrap text-[27px] border-2 border-solid bg-white-a700 rounded-[30px] md:text-[25px] sm:text-[23px] ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(['round']),
    size: PropTypes.oneOf(['xs']),
    variant: PropTypes.oneOf(['fill']),
    color: PropTypes.oneOf(['white_A700']),
};

export { Button };
