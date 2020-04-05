import React, { Suspense } from 'react'
import Login from './Login/Login';
import Landing from './Landing/Landing';
import Navbar from './NavBar/NavBar'
import { Route, Switch } from "react-router-dom";
import Auth from '../hoc/auth';

function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)}>
        <Navbar/>
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
            <Switch>
                <Route exact path="/"  component={Auth(Login)} />
                <Route exact path="/landing"  component={Auth(Landing)} />
            </Switch>
        </div>
        </Suspense>
    )
}

export default App
