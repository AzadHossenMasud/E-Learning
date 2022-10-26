import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CourseItems = () => {
    const [courses, setCourses] = useState([]) 
    useEffect(()=>{
        fetch('https://the-learning-home-server.vercel.app/courses')
        .then(res=> res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div>
            <h3>Course items</h3>
        </div>
    );
};

export default CourseItems;