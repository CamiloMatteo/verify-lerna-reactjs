import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard"

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
