import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
// import Footer from './components/Footer';
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";

// import AboutPage from './pages/AboutPage';
// import ProjectPage from './pages/ProjectPage';
import "./App.css";
function App() {
  const [bgColor, changeBg] = useState("dark");

  useEffect(() => {
    console.log("SSS");
    if (bgColor === "dark") {
      document.body.style.backgroundColor = "#282c34";
      // document.body.style.backgroundColor="#DDDDDD"
    }
  }, []);

  return (
    <div className="App">
      <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Travis Zheng</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="me-auto"></Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
             
                <Link className="nav-link navLink" to="/">
                  Home
                </Link>
                <Link className="nav-link navLink" to="/project">
                  Projects
                </Link>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              {/* <Link className="nav-link" to="/about">About me</Link>
              <Link className="nav-link" to="/project">Projects</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        <Switch>
          {/* <Route path="/about">
            <AboutPage/>
          </Route> */}
          <Route path="/project">
            <ProjectPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
