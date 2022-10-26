import React from "react";
import { Card, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title , image_url, details, rating, overview} = courseDetails;
  console.log(courseDetails);
  return (
    <div>
      <Container>
        <div className=" d-flex justify-content-between">
          <h4>{title}</h4>
          <FaDownload></FaDownload>
        </div>
        <div>
        <Card>
        <Card.Img height='300vw' width='100%' variant="top" src={image_url} />
        <Card.Body>
          <Card.Text style={{textAlign: 'left'}}>
           <p className="fs-5">{details}</p>
           <p className="text-warning">Ratting: {rating.number}/5</p>
           <p className=" fw-semibold">OverView:</p>
           <ul>
            {
                overview.map(ov => <li>{ov}</li>)
            }
           </ul>

          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;
