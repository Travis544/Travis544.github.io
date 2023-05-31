import React from "react";
import {Card, Button, Nav} from "react-bootstrap"
import Resume from '../Components/Resume'
const HomeCard= ({title, body, author, date}) => {
  return (
    
    <Card className=" text-white" id="homeCard">

    <Card.Header id="aboutTitle">{title}</Card.Header>
    
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p id="description">
        {body}

        {/* -<cite title="Source Title"> {author} on {date}</cite> */}
        </p>
        {/* <footer className="blockquote-footer">
        
        </footer> */}
      </blockquote>
     
    </Card.Body>
    <Card.Body>
    <div id="resumeBox">
    <Resume/>
    </div>
    </Card.Body>
  </Card>
  );
};
export default HomeCard;
