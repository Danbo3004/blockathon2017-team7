import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Book from "./Book";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/book" component={Book} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
