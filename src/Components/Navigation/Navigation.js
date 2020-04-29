import React from 'react';

// Routers
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Screens
import Home from '../Screens/Home';
import Introduction from '../Screens/Introduction';

const Navigation = () =>{

    return(
        <Router>
            <Switch>
                <Route exact path='/' exact component={Introduction}/>
                <Route exact path='/home' component={Home}/>
            </Switch>
        </Router>

    );

}

export default Navigation;