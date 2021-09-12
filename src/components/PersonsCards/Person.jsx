import React from 'react';

import classes from './Person.module.css'

const Person = (props) => (
    <div className={classes.card}>
        <div className={classes['card-line']}><span>Name: </span>{props.name}</div>
        <div className={classes['card-line']}><span>E-mail: </span>{props.email}</div>
        <div className={classes['card-line']}><span>Date: </span>{props.date}</div>
        <div className={classes['card-line']}><span>City: </span>{props.city}</div>
        <div className={classes['card-line']}><span>Inform: </span>{props.inform}</div>
    </div>
);

export default Person;