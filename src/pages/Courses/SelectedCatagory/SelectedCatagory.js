import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItems from '../CourseItems/CourseItems';

const SelectedCatagory = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (
        <div className='d-flex flex-wrap flex-row justify-content-center align-items-center'>
        {
            courses.map(course =><CourseItems key={course._id} course={course}></CourseItems>)
        }
</div>
    );
};

export default SelectedCatagory;