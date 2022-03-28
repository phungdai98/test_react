import React from "react";
import "./App.css";
import HeaderLayout from "./components/Header/index";
import SiderLayout from "./components/slider/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import Screen1 from "./layout/test/screen1";
import Order from "./layout/Order/Order"
function App() {
  return (
    <Router>
      <Layout>
        <SiderLayout />
        <Layout className="site-layout">
          <HeaderLayout />
          <Switch>
            <Route path="/">
              <Order />
            </Route>
          </Switch>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
