import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import {CurrentUserProvider} from 'contexts/currentUser';
import Routes from 'routes';
import TopBar from 'components/topBar';


const App = () => {
    return (
        <CurrentUserProvider>
            <Router>
                <TopBar/>
                <Routes/>
            </Router>
        </CurrentUserProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

