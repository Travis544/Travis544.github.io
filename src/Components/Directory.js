import React from "react";
import { Card, Button, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage";
const Directory = () => {
  const paths = ["About", "Projects"];
  return (
    <Card>
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link href="#first">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
};
export default Directory;
