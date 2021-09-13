import React from 'react';

import Wrapper from '../UI/Wrapper';

import classes from './Welcome.module.css'

const Welcome = () => (
    <main className={classes['main-screen']}>
        <Wrapper>
            <h1 className={classes.heading}>Practice React with RSS-school</h1>
            <h2 className={classes.subheading}>This website is my studying project for learning React. During development I have created webpack config and used features of React: JSX, components, hooks, forms, API, routing. In navigation you can see some tasks in details. If you would like to see the code, there is a link to the repository - <a href="https://github.com/razumeyka/razumeyka-REACT2021Q3" target="_blank" rel="noreferrer">Github link</a></h2>
        </Wrapper>
    </main>
);

export default Welcome;



