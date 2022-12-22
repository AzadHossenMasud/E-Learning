import React from "react";
import { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FaBeer, FaUserAlt } from "react-icons/fa";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../../App";


const Header = () => {
  const { user , userLogout} = useContext(AuthContext);
  const {theme, toggleTheme} = useContext(ThemeContext)
  const location = useLocation()

  const handleLogout = ()=>{
    userLogout()
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }
//   console.log(user);
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
              {user ? (
                <>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        {
                            user?.displayName
                        }
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Button
                        variant="light"
                        {...triggerHandler}
                        className="d-inline-flex align-items-center"
                      >
                        {user.photoURL ? (
                          <Image height={"50px"}
                          width={"50px"}
                            ref={ref}
                            src={`${user.photoURL}`}
                            roundedCircle
                          />
                        ) : (
                          <FaUserAlt ref={ref}></FaUserAlt>
                        )}
                      </Button>
                    )}
                  </OverlayTrigger>
                  <Button onClick={handleLogout} className=" my-3 mx-2" variant="dark">Logout</Button>
                  
                  <Nav.Link>
                    <Link><label >{theme === 'light'? 'Light Mood' : 'Dark Mood'}</label>
                  <ReactSwitch onChange={toggleTheme} checked ={theme === 'dark'} /></Link>
                  </Nav.Link>

                </>
              ) : (
                <>
                  <Button variant="link">
                    <Nav.Link>
                      <Link
                        className="text-dark text-decoration-none"
                        to="/signin" state={{from: location}} replace
                      >
                        Sign In
                      </Link>
                    </Nav.Link>
                  </Button>
                  
        
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
