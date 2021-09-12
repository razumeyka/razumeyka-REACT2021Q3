import React from 'react';
import ReactDom from 'react-dom';

import Button from '../UI/Button';

import classes from './Modal.module.css';

const ModalOverlay = (props) => (
    <div className={classes.overlay}>
        <div className={classes.modal}>
            <div className={classes.header}>Message</div>
            <div className={classes.inner}>
                <div className={classes.message}>{props.message}</div>
                <Button variant="button--orrange" content="Okey" onClick={props.onClose}/>
            </div>
        </div>
    </div>
)

const Modal = (props) => (
    <>
        {ReactDom.createPortal(
            <ModalOverlay 
                message={props.message} 
                onClose={props.onClose}
            />, 
            document.getElementById('overlay-root')
        )}
    </>
);

export default Modal;