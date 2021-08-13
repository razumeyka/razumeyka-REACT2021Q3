import React from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';

import classes from './Searchbar.module.css';

const Searchbar = () =>  (
    <div className={classes.searchbar}>
        <Input />
        <Button className={classes['search-button']} variant="button--orrange" content="Search"/>
    </div>
);

export default Searchbar;