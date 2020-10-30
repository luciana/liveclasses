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
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
