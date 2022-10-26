import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseItems = ({ course }) => {
  //   console.log(course);
  const { image_url, total_sell, title, author, _id } = course;

  return (
    <div className="m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img height="150px" variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>Pubished by: {author.name}</p>
            <p>Last Updated: {author.published_date}</p>
          </Card.Text>
          <Button variant="secondary"><Link to={`/course/${_id}`}>View Course</Link></Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseItems;
