import React from 'react';

import classes from './Input.module.css'

const Input = () => (
    <input type="text" placeholder="Enter text" className={classes.input}/>
);

export default Input;