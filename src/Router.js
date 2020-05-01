import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

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