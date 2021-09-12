import React, {useState, useEffect} from 'react';

import classes from './Pagination.module.css'

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const paginationArr = [];
    const pageCount  = Math.ceil(props.totalCount/props.limit);

    for ( let i = 1; i < pageCount; i+=1) {
        paginationArr.push(i);
    }

    useEffect ( () => {
        props.changePage(currentPage);
    }, [props, currentPage]);

    return (
        <ul className={classes.list}>
            {paginationArr.map( item => {
                const activeBtn = item === currentPage ? `${classes.button} ${classes["button-active"]}` : `${classes.button}`;
                return <li key={item}><button type="submit" className={activeBtn} onClick={() => setCurrentPage(item)}>{item}</button></li>
            })}
        </ul>
    );
};

export default Pagination;