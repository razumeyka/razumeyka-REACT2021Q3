import React, {useState, useEffect, useCallback} from 'react';

import Wrapper from '../UI/Wrapper';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Character from './Character';
import Pagination from '../UI/Pagination';

import classes from './Characters.module.css';
        

const Characters = () => {
    const [characters, setCharacters] = useState(null);
    const [totalCount, setTotalCount] = useState(0);
    const [searchName, setSearchName] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [isPending, setIsPending] = useState(true);
    const [errorStatus, setErrorStatus] = useState(null);
    const [sort, setSort] = useState('name:asc');
    const [page, setPage] = useState(1);
    const limit = 60;

    fetch("https://the-one-api.dev/v2/character?", {
        "headers": {
            "Authorization": "Bearer ri26znaSEbsG2zPo5ruK",
        }
    }).then ( response => response.json())
    .then ( json => {
        setTotalCount(json.docs.length);
    }).catch ( err => {
        console.error(err);
    });

    const fetchData = useCallback( async () => {
        setIsPending(true);
        setErrorStatus(null);
        try {
            const response = await fetch(`https://the-one-api.dev/v2/character?name=${enteredName}&sort=${sort}&limit=${limit}&page=${page}`, {
                "headers": {
                    "Authorization": "Bearer ri26znaSEbsG2zPo5ruK",
                }
            });
            if ( !response.ok ) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();

            const transformedCharacters = data.docs.map( item => {
                return {
                    id: Math.random(),
                    name: item.name,
                    gender: item.gender,
                    race: item.race,
                    spouse: item.spouse,
                    wikiUrl: item.wikiUrl
                }
            });
            setCharacters(transformedCharacters);
        } catch (error) {
            setErrorStatus(error.message);
        } finally {
            setIsPending(false);
        };
    }, [enteredName, sort, page]);

    const searchHandler = event => {
        setSearchName(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        setEnteredName(searchName);
    };

    const changeSortHandler = (event) => {
        setSort(event.target.value);
        fetchData();
    };

    const paginationHandler = item => {
        setPage(item);
    };

    useEffect( () => {
        fetchData();
    }, [fetchData]);


    return (
        <div className="screen-wrap">
            <Wrapper>
                <h1 className="heading">The Lord of the Rings</h1>
                <div className="descr">Interaction with API <a href="https://the-one-api.dev/" target="_blank" rel="noreferrer">The Lord of the Rings</a>: fetching data, sorting, searching and pagination</div>
                <form onSubmit={submitHandler} className={classes['search-line']}>
                    <Input type="text" placeholder="Search character by name" value={searchName} onChange={searchHandler} />
                    <Button variant="button--orrange" content="Search"/>
                </form>
                <div className={classes['sort-line']}>
                    <label htmlFor="sort">
                        <span>Sort by:</span>
                        <select id="sort" value={sort} onChange={changeSortHandler} onBlur={changeSortHandler}>
                            <option value="name:asc">name ascending</option>
                            <option value="name:desc">name descending</option>
                            <option value="gender:asc">gender ascending</option>
                            <option value="gender:desc">gender descending</option>\
                            <option value="race:asc">race ascending</option>
                            <option value="race:desc">race descending</option>
                        </select>
                    </label>
                </div>
                {isPending && <p>Loading...</p>}
                {!isPending && characters.length === 0 && !errorStatus && <p>Found no characters</p>}
                {!isPending && errorStatus && <p>{errorStatus}</p>}
                {!isPending && characters && <div className={classes.list}>
                    { characters.map( (item) => 
                        <div key={item.id} className={classes['list-item']}>
                            <Character 
                                name={item.name} 
                                gender={item.gender} 
                                race={item.race} 
                                spouse={item.spouse} 
                                wiki={item.wikiUrl} 
                            />
                        </div>
                    )}
                </div>}
                {!enteredName && <Pagination 
                    limit={limit} 
                    totalCount={totalCount} 
                    changePage={paginationHandler}
                />}
            </Wrapper>
        </div>
    );
};

export default Characters;