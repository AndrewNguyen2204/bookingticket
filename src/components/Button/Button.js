import React from 'react';
import './Button.css';



const STYLES = [
    'btn--primary',
    'btn--outline',
    'btn--transparent'
];

const SIZES = [
    'btn--small',
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    size
}) => {

    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkSize = SIZES.includes(size) ? size : SIZES[1];

    return (

        <button
            type={type}
            className={`btn ${checkStyle} ${checkSize}`}
            onClick={onClick}
        >

            {children}

        </button>
    )
}

