import React from "react";
import { Button, Card} from "react-bootstrap"
import { useState, useEffect } from "react";



const UpdateLogs = () => {
const url="https://api.github.com/repos/travis544/Travis544.github.io/commits"
const [log,setLog]=useState([])

useEffect(()=>{
    let arr=[]
    fetch(url)
		.then(response => response.json()) //Converting the response to a JSON object
		.then((data)=>{
            for (let commit of data){
                // console.log(commit)
                let obj={}
                obj.message=commit["commit"].message
                let dateStr=commit["commit"].author.date
                obj.date=new Date(dateStr)
                console.log(obj)
                arr.push(obj)
            }

            setLog(arr)
            // console.log(data)
        })

}, [])

const adjustForTimezone=(date)=>{
    var timeOffsetInMS= date.getTimezoneOffset() * 60000;
    date.setTime(date.getTime() + timeOffsetInMS);
    return date
}

const timeStrin=(date)=>{
    date=adjustForTimezone(date)
    let h = date.getHours();
    let amOrPm="AM"
    if (h>12){
        amOrPm="PM"
        h=h-12
    }
    let m = date.getMinutes();
    let s = date.getSeconds();
    let str=h+":"+m+":"+s+" "+amOrPm
    return str
}

  return (
    <div>
        <h3 style={{color:"white"}}>Recent updates</h3 >
        <Card id="updateLog">
        {/* <Card.Body>This is some text within a card body.</Card.Body> */}
        <ul>
            {log.map((commit, index)=>{
                return <li key={index}> {commit.date.toDateString() }, {timeStrin(commit.date)} : {commit.message} </li>
            })}
        </ul>
        </Card>
    </div>
  );
};
export default UpdateLogs;
