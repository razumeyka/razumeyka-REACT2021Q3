import React from 'react';

import classes from './Character.module.css';

const Character = (props) => (
    <div className={classes.card}>
        <div className={classes['card-title']}>{props.name}</div>
        <div className={classes['card-line']}><span>Gender:</span>{props.gender}</div>
        <div className={classes['card-line']}><span>Race:</span>{props.race}</div>
        <div className={classes['card-line']}><span>spouse:</span>{props.spouse}</div>
        <div className={classes['card-line']}><span>wikiUrl:</span><a href={props.wiki}>{props.wiki}</a></div>
    </div>
);

export default Character;