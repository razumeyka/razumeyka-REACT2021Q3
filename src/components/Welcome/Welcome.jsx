import React from 'react';

import Wrapper from '../UI/Wrapper';

import classes from './Welcome.module.css'

const Welcome = () => (
    <main className={classes['main-screen']}>
        <Wrapper>
            <h1 className={classes.heading}>Practice React with RSS-school</h1>
            <h2 className={classes.subheading}>This website is my studying project for learning React. During development I trained such themes: components, hooks, forms, API, routing. In navigation you can see tasks in details. If you would like to see the code, there is a link to the repository - <a href="hhh">Some link</a></h2>
        </Wrapper>
    </main>
);

export default Welcome;



