import React, { useRef } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const CourseDetails = () => {
    const {user}= useContext(AuthContext)
  const componentRef = useRef();
  const courseDetails = useLoaderData();
  const location = useLocation()
  const { title, image_url, details, rating, overview } = courseDetails;
  console.log(courseDetails);
  return (
    <div className="mb-5">
      <Container>
        <div className=" d-flex justify-content-between">
          <h4>{title}</h4>
          <ReactToPrint
            trigger={() => <button><FaDownload></FaDownload></button>}
            content={() => componentRef.current}
          />
        </div>
        <div ref={componentRef}>
          <Card>
            <Card.Img
              height="300vw"
              width="100%"
              variant="top"
              src={image_url}
            />
            <Card.Body>
              <Card.Text style={{ textAlign: "left" }}>
                <p className="fs-5">{details}</p>
                <p className="text-warning">Ratting: {rating.number}/5</p>
                <p className=" fw-semibold">OverView:</p>
                <ul>
                  {overview.map((ov) => (
                    <li>{ov}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <div>
        {
            !user &&<Link to="/signin" state={{from: location}} replace> <Button variant="success">Get Premium Access</Button></Link>
        }
      

      </div>
    </div>
  );
};

export default CourseDetails;
