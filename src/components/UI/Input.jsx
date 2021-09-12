import React from 'react';

import classes from './Input.module.css'

const Input = (props) => (
    <input type={props.type} value={props.value} placeholder={props.placeholder} className={classes.input} onChange={props.onChange} onKeyDown={props.onKeyDown}/>
);

export default Input;