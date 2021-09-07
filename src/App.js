import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Container from './components/UI/Container';
import Welcome from './components/Welcome/Welcome';
import ComponentsTask from './components/Pages/ComponentsTask';
import CardDetail from './components/Cards/CardDetail';
import FormsTask from './components/Pages/FormsTask';
import Characters from './components/Characters/Characters';
import NotFound from './components/Pages/NotFound';
	
const App = () => (
    <>
        <Switch>
            <Route path="/" exact>
                <Redirect to="/about" />
            </Route>
            <Route path="/about">
                <Container>
                    <Header />
                    <Welcome />
                </Container>
            </Route>
            <Route path="/components" exact>
                <Header />
                <ComponentsTask />
            </Route>
            <Route path="/components/:appartId">
                <Header />
                <CardDetail />
            </Route>
            <Route path="/forms">
                <Header />
                <FormsTask />
            </Route>
            <Route path="/api">
                <Header />
                <Characters />
            </Route>
            <Route path="*">
                <Container>
                    <Header />
                    <NotFound />
                </Container>
            </Route>
        </Switch>
    </>
)

export default App;
