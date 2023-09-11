import { Card} from "react-bootstrap"
import { Button} from "react-bootstrap"
import galaxyImage from "../images/galaxy.jpg"
import {BsLink45Deg } from "react-icons/bs";
import { BsCameraVideo} from "react-icons/bs"
import { FaGithub } from "react-icons/fa";
import "../App.css";


const ProjectItem = ({projectName, description, imageUrl, completeStatus, sourceCode, demoLink ,deployedUrl}) => {

        const determineImage = ()=>{
            if (imageUrl){
                return require(`../images/${imageUrl}`)
            }else{
                return require('../images/galaxy.jpg')
            }
        }
        
        return (
            <Card style={{marginTop:"5%", marginBottom:"5%" }} >
              <Card.Img style={{height:300}} variant="top" src={determineImage()}/>
              <Card.Body>
                <Card.Title><a style={{"text-decoration": "none"}} href=""> {projectName} </a></Card.Title>
                <Card.Text >
                    <div style={{height:100, overflowY:"scroll"}}>
                        {description}
                    </div>
                </Card.Text>

                <div id = "projectButton" style={{height:60}}>
                    {sourceCode && <Button variant="outline-primary" href={sourceCode} target="_blank"> <FaGithub/> Source code</Button>}
                    {demoLink&& <Button variant="outline-primary" href={demoLink} target="_blank"> <BsCameraVideo/> Project Demo</Button>}
                    {deployedUrl && <Button variant="outline-primary" href={deployedUrl} target="_blank"> <BsLink45Deg/> Project URL</Button>}
                </div>
              </Card.Body>

              <Card.Footer className="text-muted">Status: {completeStatus}</Card.Footer>
            </Card>
        );


       
}


export default ProjectItem