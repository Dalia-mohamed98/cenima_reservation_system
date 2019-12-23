import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound/NotFound';
import Movies from '././components/Movies/Movies';
import AddMovie from '././components/AddMovie/AddMovie';
import EditMovie from '././components/EditMovie/EditMovie';

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/admin" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/Signup" component={Signup}/>
            <Route path="/Movies" component={Movies}/>
            <Route path="/AddMovie" component={AddMovie}/>
            <Route path="/EditMovie" component={EditMovie}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;