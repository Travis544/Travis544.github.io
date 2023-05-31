import React from 'react';
import galaxyImage from "../images/galaxy.jpg"
import TypeWriter from "../Components/TypeWriter"
import Container from "react-bootstrap/Container";
import HomeCard from '../Components/HomeCard'
import Directory from '../Components/Directory'
import Footer from "../Components/Footer"
import UpdateLogs from '../Components/UpdateLogs';
const HomePage=()=>{
    const description="Hi I'm Travis Zheng. I graduated from Rose-Hulman Institute Of Technology studying Computer Science. This is my personal profolio showcasing the projects that I have done or I am currently working on."

    return(<div id="home">
        {/* <div className="flexContainer"> */}
        <div>
        <Container>
        <div id="containerIm">
        <img className="responsiveIm" src={galaxyImage} alt="thumbnail"/>    
        <TypeWriter text="Welcome to my website"/>
        </div>
        <HomeCard title={"About"} body = {description} />
        </Container>
        <UpdateLogs/>
        </div>
        {/* </div> */}
       <Footer/>
    </div>)

    
}
export default HomePage;