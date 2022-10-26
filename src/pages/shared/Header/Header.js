import React from "react";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              height={"50px"}
              width={"50px"}
              className=" me-2 rounded"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/learn-from-home-design-template-bee74218bcaef0bddddab891c1cc0f03_screen.jpg?ts=1591293893"
              alt=""
            />
            <sup>The</sup> Learnig Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link className="text-dark text-decoration-none" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-dark text-decoration-none" to="/courses">
                  Courses
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-dark text-decoration-none" to="/tutorial">
                  {" "}
                  Tutorial
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-dark text-decoration-none" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-dark text-decoration-none" to="/faq">
                  FAQ
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="link">
                <Nav.Link>
                  <Link className="text-dark text-decoration-none" to="/signin">
                    Sign In
                  </Link>
                </Nav.Link>
              </Button>

              <Button variant="link">
                <Nav.Link>
                  <Link className="text-dark text-decoration-none" to="/signup">
                    Sign Up
                  </Link>
                </Nav.Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
