import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
