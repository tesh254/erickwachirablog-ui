import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./assets/css/index.css";
import "./assets/css/home.css";
import "./assets/css/posts.css";
import "./assets/css/form.css";
import "./assets/css/bootstrap/css/bootstrap.min.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact={true} path="/auth" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
