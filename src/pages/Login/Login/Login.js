import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaBeer, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
    const {userLoginWithGoogle, userLoginWithGithub} = useContext(AuthContext)
    const navigate= useNavigate()
    // console.log(userLoginWithGoogle);
    const providerGoogle = new GoogleAuthProvider();
    const providerGitHub = new GithubAuthProvider();


    const handleGoogle =()=>{
        userLoginWithGoogle(providerGoogle)
        .then((result) => {
            const user = result.user;
            // console.log(user)
            navigate('/')
            // ...
          }).catch((error) => {
            // Handle Errors here.
            console.log(error);
          });
    }

    const handleGithub = ()=>{
        userLoginWithGithub(providerGitHub)
        .then((result) => {
            const user = result.user;
            // console.log(user)
            navigate('/')
            // ...
          }).catch((error) => {
            // Handle Errors here.
            console.log(error);
          });
    }




  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    console.log(form);
  };

  

  return (
    <div>
      <Container className=" d-flex justify-content-center">
        <form onSubmit={handleSubmit} className=" w-50">
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
            />
          </div>
         
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <div>
            <p className="mt-3">Don't have an Account??  <Link
                        className=""
                        to="/register"
                      >
                        Sign Up
                      </Link> Here</p>
          </div>
        </form>
      </Container>
      <Container className=" mt-3">
        <p className=" text-primary fs-4 fw-semibold">Continuous With:</p>
        <div className="">
          <FaGoogle onClick={handleGoogle} className=" me-3 fs-4"></FaGoogle>
          <FaGithub onClick={handleGithub} className=" me-3 fs-4"></FaGithub>
        </div>
      </Container>
    </div>
  );
};

export default Login;
