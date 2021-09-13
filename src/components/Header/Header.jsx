import React from 'react';
import { NavLink } from 'react-router-dom';

import Wrapper from '../UI/Wrapper';

import classes from './Header.module.css';

const Header = () => (
    <header className={classes.header}>
        <Wrapper>
            <ul className={classes.navbar}>
                <li className={classes['nav-item']}><NavLink activeClassName={classes['nav-item-active']} to="/about">About</NavLink></li>
                <li className={classes['nav-item']}><NavLink activeClassName={classes['nav-item-active']} to="/components">Components</NavLink></li>
                <li className={classes['nav-item']}><NavLink activeClassName={classes['nav-item-active']} to="/forms">Forms</NavLink></li>
                <li className={classes['nav-item']}><NavLink activeClassName={classes['nav-item-active']} to="/api">API</NavLink></li>
            </ul>
        </Wrapper>
    </header>
);

export default Header;