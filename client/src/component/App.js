import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Book from "./Book";
import Login from "./Login";
import Confirm from "./Confirm";
import History from "./History";
import Review from "./Review";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/confirm" component={Confirm} />
          <Route exact path="/history" component={History} />
          <Route exact path="/review" component={Review} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
