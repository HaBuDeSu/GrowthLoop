import React from 'react';
import './App.css';
import Funnel from './components/Funnel';
import { BrowserRouter as Router, Route} from  "react-router-dom";
import Registration from "./components/Registration"
import Home from "./components/Home"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Registration}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/dashboard" component = {Dashboard} />
    </Router>
  );
}

export default App;
