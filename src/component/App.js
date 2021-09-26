import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import Display from './Display';
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="container text-center">
            <Switch>
              <Route path="/search" component={Search} />
              <Route exact path="/" component={Display} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
