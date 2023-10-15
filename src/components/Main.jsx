import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Api from './Api';
import Chat from './Chat';
import Home from './Home';
import './Main.css';  

const Main = () => {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/chat' component={Chat} />
                <Route path='/api' component={Api} />
            </Switch>
        </div>
    );
}

export default Main;
