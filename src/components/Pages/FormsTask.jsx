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
        <Wrapper>
            <Form saveRequests={saveNewRequest} />
            <PersonsCards items={requests}/>
        </Wrapper>
    );
}

export default FormsTask;