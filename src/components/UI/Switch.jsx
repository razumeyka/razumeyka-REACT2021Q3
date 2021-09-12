import React from 'react';

import classes from './Switch.module.css'

const Checkbox = (props) => (
    <div className={classes.switch}>
        <input type="checkbox" checked={props.checked} onChange={props.onChange} id={props.id} />
        <label htmlFor={props.id} className={classes.label}>{props.content}</label> 
    </div>
);

export default Checkbox;