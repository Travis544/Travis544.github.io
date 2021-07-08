import React from "react";
import { Button} from "react-bootstrap"
import resume from '../Static/YuanhangZheng_Resume.pdf'
const Resume = ({}) => {
  return (
    <div>
      <Button variant="outline-info" href={resume}  target="_blank">My Resume</Button>{" "}
    </div>
  );
};
export default Resume;
