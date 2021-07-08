import React from "react";
import project from "../Projects.json";
// import ss from '../images/s'
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import ProjectItem from "../Components/ProjectItem";
const ProjectPage = ({}) => {
  const [rowArr, setRowArr] = useState([]);
  // how many projects to show per row
  const rowCount = 3;
  useEffect(() => {
    let row = Math.ceil(project.length / 3);
    console.log(row);
    let count = 0;
    for (let i = 0; i < row; i++) {
      let container = [];
      for (let j = count; j < rowCount + count; j++) {
        console.log(j);
        if (j >= project.length) {
          container.push({})
        }else{
          container.push(project[j]);
        }
      }
      console.log("CONTAINER");
      console.log(container);
      setRowArr((oldArray) => [...oldArray, container]);
      count = rowCount + count;
    }
    console.log(rowArr);
  }, []);

  // useEffect(()=>{
  //   console.log("RowArr")
  //   console.log(rowArr)
  // }, [rowArr])

  console.log(rowArr);

  return (
    <Container>
      {rowArr.map((elem, index) => {
        return (
          <Row key={index + "T"} style={{justifyContent:"center"}}>
            {elem.map((proj, index) => {
              if (Object.keys(proj).length > 0) {
                return (
                  <Col key={"index" + index} lg={3}>
                    <ProjectItem project={proj} />
                  </Col>
                );
              }else{
                return (<Col key={"index" + index} lg={3}>
                
              </Col>)
              }
            })}
          </Row>
        );
      })}
    </Container>
  );
};
export default ProjectPage;
