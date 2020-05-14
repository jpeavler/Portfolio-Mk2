import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

  function MyRouter () {
      return(
            <Router>
                <div>
                    <Switch>
                        <Route path="/Resume">
                            <Resume/>  
                        </Route>
                        <Route path="/Projects">
                            <Projects/>
                        </Route>
                        <Route path="/Contact">
                            <ContactMe/>
                        </Route>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
      )
  }

  export default MyRouter;