import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import './index.css';
import App from './App';
import Children1 from './Children1';
import Children2 from './Children2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/children1" component={Children1} />
            <Route path="/children2" component={Children2} />
        </Route>
    </Router>
), document.getElementById('root'));
registerServiceWorker();

