import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StickyNavbar from "./component/Navbar";
import Page from "./component/Page";
import Footer from "./component/Footer";

function App() {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <StickyNavbar />
      <Page />
      <Footer />
    </Router>
  );
}

export default App;
