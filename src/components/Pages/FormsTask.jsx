import React, { useState } from 'react';

import Wrapper from '../UI/Wrapper';
import Form from '../Form/Form';
import PersonsCards from '../PersonsCards/PersonsCards';

const FormsTask = () => {
    const [requests, setRequests] = useState([]);

    const saveNewRequest = (user) => {
        setRequests( prevState => [...prevState, user]);
    };

    return (
        <div className="screen-wrap">
            <Wrapper>
                <h1 className="heading">Form</h1>
                <div className="descr">This task shows work with form validation and entered data. You can add new cards, when you fill the form.</div>
                <Form saveRequests={saveNewRequest} />
                <PersonsCards items={requests}/>
            </Wrapper>
        </div>
    );
}

export default FormsTask;