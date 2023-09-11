import React from "react";

import Footer from "../Components/Footer";
import ProjectItem from "../Components/ProjectItem"
import projectData from "../Static/projects.json"
const ProjectPage = () => {
  let COLUMN_COUNT = 3

  const  generateRow= (currentIndex, count)=>{
    let result = []
    for (let i =currentIndex; i<count+currentIndex; i++){
      console.log(i)
      let project = projectData[i]
      console.log(project)
      result.push (
        <div class = "col-lg-4" style={{ }}  >
                <div >
                <ProjectItem projectName={project.name} description={project.description} imageUrl={project.imageUrl} sourceCode={project.sourceCode}
                deployedUrl = {project.deployedUrl} demoLink={project.demoLink} completeStatus={project.completionStatus}/>
                </div>
        </div>
      )
    }
    return result

  }

  const generateProjectCard=()=>{
  
    let result = []
    let iterationCount = Math.ceil(projectData.length/COLUMN_COUNT)
    let currentIndex = 0
    console.log(iterationCount)
    for(let i =0;i<iterationCount;i++){
      let count = COLUMN_COUNT
      if (i == iterationCount-1){
        let remainder = projectData.length%COLUMN_COUNT
        if(remainder !== 0){
          count = remainder
        }
      }

      let elem = (<div className = "row"  >
          {generateRow(currentIndex, count)}
      </div>)
      result.push(elem)
      currentIndex = currentIndex + count
    }
    return result
    
  }


  // const test = ()=>{
   
  // }

  return (

    <div id ="projectPage">
      <div id="projectCards">
      {
        generateProjectCard()
      }
      </div>
    
    <Footer/>
    </div>
  );
};
export default ProjectPage;
