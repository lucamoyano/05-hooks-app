import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                
                {/* Propiedad 'exact' para que renderice el componente si el path es exacto */}
                    <Switch>
                        <Route exact path="/" component={ HomeScreen } />
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                        
                        {/* En caso que el path no exista componente por defecto*/}
                        {/* <Route component={ HomeScreen } /> */}

                        {/* En caso que el path no exista redirecciona*/}
                        <Redirect to="/" />
                    </Switch>
                
                
            </div>
        </Router>
    )
}
