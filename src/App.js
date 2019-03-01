import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./assets/css/index.css";
import "./assets/css/home.css";
import "./assets/css/posts.css";
import "./assets/css/form.css";
import "./assets/css/about.css";
import "./assets/css/bootstrap/css/bootstrap.min.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/Home";
import SingleArticle from './components/SingleArticle';
import About from "./components/About";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact={true} path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact path="/articles/:slug" component={ SingleArticle } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
