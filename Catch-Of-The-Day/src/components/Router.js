import React from 'react';  
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Notfound from './Notfound';
import StorePicker from "./StorePicker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeID" component={App}/>
      <Route  component={Notfound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;