import React from 'react';
import cool from "../images/galaxy.jpg"
import TypeWriter from "../Components/TypeWriter"
import Container from "react-bootstrap/Container";
import HomeCard from '../Components/HomeCard'
import Directory from '../Components/Directory'

import UpdateLogs from '../Components/UpdateLogs';
const HomePage=()=>{
    const description="Hi I'm Travis Zheng. I am a junior student at Rose-Hulman Institute Of Technology studying Computer Science. This is my personal profolio showcasing the cool projects that I have done or I am currently working on. You'll also learn more about me on this website."

    return(<div id="home">
        {/* <div className="flexContainer"> */}
        <div>
        <Container>
        <div id="containerIm">
        <img className="responsiveIm" src={cool} alt="thumbnail"/>    
        <TypeWriter text="Welcome to my website"/>
        </div>
        <HomeCard  className="" title="About" author="Travis Zheng" body={description} date={"07/04/2021"}/>
            {/* <Directory/> */}
        </Container>
        <UpdateLogs/>
        </div>
        {/* </div> */}
        
      
    </div>)

    
}
export default HomePage;