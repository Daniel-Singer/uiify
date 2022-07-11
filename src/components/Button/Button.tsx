import React from 'react';

export interface ButtonProps {
    children: React.ReactNode
};

const Button = (props:ButtonProps) => {
    return (
        <button>{props.children}</button>
    )
};

export default Button;