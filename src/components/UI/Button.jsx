import React from 'react';

import classes from './Button.module.css'

const Button = (props) => {
    const buttonClasses = `${classes.button} ${classes[props.variant]} ${props.className}`;
    return (
        <button type="submit" className={buttonClasses} onClick={props.onClick}>{props.content}</button>
    )
};

export default Button;