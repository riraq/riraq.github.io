import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
