import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Pages Import
import HomePage from './Pages/HomePage'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/not" exact component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
