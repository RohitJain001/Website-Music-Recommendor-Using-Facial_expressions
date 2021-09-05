import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import './index.css';
const App =()=>{
return(
<>
<div className="bg-image">
<Navbar/>
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Redirect to="/" />

</Switch>
</div>
</>
);
};
export default App;