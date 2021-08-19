import React, { useState, useEffect } from 'react';

import Wrapper from '../UI/Wrapper';
// import Input from '../UI/Input';
import Switch from '../UI/Switch';
import Checkbox from '../UI/Checkbox';
import Button from '../UI/Button';
import Modal from '../Modal/Modal';

import classes from './Form.module.css';

const Form = (props) => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [consultDate, setConsultDateName] = useState('');
    const [userCity, setUserCity] = useState('Minsk');
    const [userInform, setUserInform] = useState(false);
    const [userAgreement, setUserAgreement] = useState(true);
    const [errors, setErrors] = useState({});
    const [isModal, setModal] = useState(false);


    const changeNameHandler = event => {
        setUserName(event.target.value);
    };
    const changeEmailHandler = event => {
        setUserEmail(event.target.value);
    };
    const changeDateHandler = event => {
        setConsultDateName(event.target.value);
    };
    const changeCityHandler = event => {
        setUserCity(event.target.value);
    };
    const changeInformHandler = event => {
        setUserInform(event.target.checked);
    };
    const changeAgreementHandler = event => {
        setUserAgreement(event.target.checked);
    };

    const validate = () => {
        setErrors({});

        if ( userName.trim() === "" ) {
            setErrors( prevState => {
                return { ...prevState, userName}
            });
        }
        if ( userEmail.trim() === "" ) {
            setErrors( prevState => {
                return { ...prevState, userEmail}
            });
        }
        if ( consultDate.trim() === "" ) {
            setErrors( prevState => {
                return { ...prevState, consultDate}
            });
        }
        if ( userAgreement === false ) {
            setErrors( prevState => {
                return { ...prevState, userAgreement}
            });
        }
    };

    useEffect( () => {
        validate();
    }, [ userName, userEmail, consultDate, userAgreement ]);

    const submitHandler = (event) => {
        event.preventDefault();

        validate();

        if (Object.keys(errors).length === 0) {
            const newUser = {
                id: Math.random(),
                name: userName,
                email: userEmail,
                date: consultDate,
                city: userCity,
                inform: userInform ? 'yes' : 'no'
            };

            setModal(true);
    
            props.saveRequests(newUser);
    
            setUserName("");
            setUserEmail("");
            setConsultDateName("");
            setUserCity("Minsk");
            setUserInform(false);
            setUserAgreement(true);
        }
    };

    const modalCloseHandler = () => {
        setModal(false);
    };

    return (
        <Wrapper>
            { isModal && <Modal message="Your request is saved" onClose={modalCloseHandler} /> }
            <div className={classes.form}>
                <h3 className={classes['form-heading']}>Leave a request for consultation</h3>
                <form onSubmit={submitHandler}>
                    <div className={classes['form-row']}>
                        <label htmlFor="username" className={classes['form-control']}>
                            {errors.userName === undefined && <span>Your name:</span>}
                            {errors.userName !== undefined && <span className={classes['validity-message']}>Please, enter your name</span>}
                            <input 
                                type="text" 
                                id="username" 
                                name="username"
                                className={errors.userName !== undefined ? classes.invalid : undefined}
                                placeholder="Enter your name"
                                value={userName}
                                onChange={changeNameHandler}
                            />
                        </label>
                        <label htmlFor="email" className={classes['form-control']}>
                            {errors.userEmail === undefined && <span>Your e-mail:</span>}
                            {errors.userEmail !== undefined && <span className={classes['validity-message']}>Please, enter your e-mail</span>}
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                className={errors.userEmail !== undefined ? classes.invalid : undefined}
                                placeholder="Enter your mail"
                                value={userEmail}
                                onChange={changeEmailHandler}
                            />
                        </label>
                        <label htmlFor="consultdate" className={classes['form-control']}>
                            {errors.consultDate === undefined && <span>Suitable date:</span>}
                            {errors.consultDate !== undefined && <span className={classes['validity-message']}>Please, chose suitable date:</span>}
                            <input 
                                type="date" 
                                id="consultdate" 
                                name="consultdate"
                                className={errors.consultDate !== undefined ? classes.invalid : undefined}
                                value={consultDate}
                                onChange={changeDateHandler}
                            />
                        </label>
                        <label htmlFor="city" className={classes['form-control']}>
                            <span>Your city:</span>
                            <select id="city" value={userCity} onChange={changeCityHandler} onBlur={changeCityHandler}>
                                <option value="Minsk">Minsk</option>
                                <option value="Lviv">Lviv</option>
                                <option value="Orsha">Orsha</option>
                                <option value="Gdansk">Gdansk</option>
                            </select>
                        </label>
                    </div>
                    <Switch id="inform" checked={userInform} onChange={changeInformHandler} content="Inform me about new apparts"/>
                    <Checkbox id="agreement" checked={userAgreement} onChange={changeAgreementHandler} content="Agree to Services Agreement"/>
                    {errors.userAgreement !== undefined && <span className={classes['validity-message']}>Please, check the agreement</span>}
                    <div className={`${classes['form-control']} ${classes['form-control-button']}`}>
                        <Button variant="button--green" content="Add a request" />
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default Form;