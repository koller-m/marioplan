import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import CreateProject from './projects/CreateProject';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateProject} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
