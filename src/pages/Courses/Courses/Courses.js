import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import CourseItems from '../CourseItems/CourseItems';
import CourseSidebar from '../CourseSidebar/CourseSidebar';

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses);
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={2} className='bg-dark text-white'> 
                    <CourseSidebar courses={courses}></CourseSidebar> 
                    </Col>
                    <Col  xs={10} >
                        <CourseItems></CourseItems>
                       
                    </Col> 
                </Row>

            </Container>
        </div>
    );
};

export default Courses;