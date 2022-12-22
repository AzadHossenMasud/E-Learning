import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg')",
    height: "100vh",
   
   
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: 'white'
  };
  return (
    <div style={myStyle} >
      <div className=' pt-5'>
      <h2 style={{ fontSize: "50px"}}>Learn To Code</h2>
      <p>With the world's largest web developer site</p>
      <Button variant="secondary"><Link className=" text-white text-decoration-none fs-3" to='/courses'>Courses</Link></Button>{' '}
      </div>
    </div>
  );
};

export default Home;
