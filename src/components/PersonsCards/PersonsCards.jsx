import React from 'react';

import Person from './Person';

import classes from './PersonsCards.module.css';

const PersonsCards = (props) => {
    
    const requestsList = props.items;

    return (
        <div className={classes.list}>
            { requestsList.map( (item) =>
                <div key={item.id} className={classes['list-item']}>
                    <Person name={item.name} email={item.email} date={item.date} city={item.city} inform={item.inform} />
                </div>
            )}
        </div>
    );
};

export default PersonsCards;