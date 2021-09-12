import React from 'react';

import classes from './Input.module.css'

const Input = (props) => (
    <input type={props.type} placeholder={props.placeholder} className={classes.input} />
);

export default Input;