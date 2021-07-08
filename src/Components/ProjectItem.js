import React from "react";
import { Button, Card} from "react-bootstrap"
const ProjectItem = ({project}) => {
  // let im;
  //  if(project.srcCode!=""){
  // }
    return (
    <Card style={{margin:"20px"}}>
    <Card.Img variant="top" src={project.imageSrc} />
    <Card.Body>
      <Card.Title>{project.name}</Card.Title>
      <Card.Text>
        {project.description}
      </Card.Text>
      <Card.Text>
        <i style={{fontSize:"12px"}}>{project.technologies}</i>
      </Card.Text>
    </Card.Body>
    <Card.Footer className="flexContainer" style={{justifyContent:"space-between"}}>
      { project.srcCode!=""&&
      <a href={project.srcCode}>
      {/* <img src="/images/GitHub-Mark-32px.png"  style={{maxHeight:"20px"}}/> */}
      <i class="fab fa-github" style={{maxHeight:"20px"}} ></i>
      </a>
      }
    {
      project.deployedLink&&
      <a href={project.deployedLink}>
       <i class="material-icons" >link</i>
       </a>
    }     
      <small className="text-muted">
       Status: {project.status}
      </small>
    </Card.Footer>
  </Card>
  );
};
export default ProjectItem;
