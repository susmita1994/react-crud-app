import React from 'react';
import {Router ,Route ,Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Notfound from './pages/Notfound';

const Myroute = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Registration} />
                <Route component={Notfound} />
            </Switch>
        </div>
    );
};

export default Myroute;