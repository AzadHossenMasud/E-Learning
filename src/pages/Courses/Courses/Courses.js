import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseItems from '../CourseItems/CourseItems';
import CourseSidebar from '../CourseSidebar/CourseSidebar';

const Courses = () => {
    const catagories = useLoaderData()
    // console.log(courses);
    const [courses, setCourses] = useState([]) 
    useEffect(()=>{
        fetch('https://the-learning-home-server.vercel.app/courses')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2} className='bg-dark text-white'> 
                    <CourseSidebar key='101' catagories={catagories}></CourseSidebar> 
                    </Col>
                    <Col  xs={10} >
                    <h3>Available Courses</h3>
                        <div className='d-flex flex-wrap flex-row justify-content-center align-items-center'>
                                {
                                    courses.map(course =><CourseItems key={course._id} course={course}></CourseItems>)
                                }
                        </div>
                        
                       
                    </Col> 
                </Row>

            </Container>
        </div>
    );
};

export default Courses;