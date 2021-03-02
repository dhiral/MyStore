import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import ShowCart from './showCart';

function Routerfunc() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/showCart/:prolist" render={(props) => <ShowCart {...props} />} />
           
          
        </Switch>
      
    </Router>
  );
}

export default Routerfunc;
