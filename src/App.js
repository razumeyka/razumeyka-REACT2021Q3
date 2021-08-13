import React from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import Cards from './components/Cards/Cards';
	
const App = () => ( 
    <div className="rss-app">
        <Searchbar />
        <Cards />
    </div>
);

export default App;
