import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    console.log(courseDetails)
    return (
        <div>
            <h3>Course Details</h3>
        </div>
    );
};

export default CourseDetails;