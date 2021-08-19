import React, {useState} from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';
import PersonsCards from './components/PersonsCards/PersonsCards';
	
const App = () => {
    const [requests, setRequests] = useState([]);

    const saveNewRequest = (user) => {
        setRequests( prevState => [...prevState, user]);
    };

    return (
        <div className="rss-app">
            <Searchbar />
            <Cards />
            <Form saveRequests={saveNewRequest} />
            <PersonsCards items={requests}/>
        </div>
    )
};

export default App;
