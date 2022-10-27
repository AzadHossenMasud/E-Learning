import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaBeer, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
    const [err, setErr] = useState('')
    const {userLoginWithGoogle, userLoginWithGithub, userLogin} = useContext(AuthContext)
    const navigate= useNavigate()
    // console.log(userLoginWithGoogle);
    const providerGoogle = new GoogleAuthProvider();
    const providerGitHub = new GithubAuthProvider();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleGoogle =()=>{
        userLoginWithGoogle(providerGoogle)
        .then((result) => {
            const user = result.user;
            // console.log(user)
            navigate(from, {replace: true});

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
            navigate(from, {replace: true});

            // ...
          }).catch((error) => {
            // Handle Errors here.
            console.log(error);
          });
          
    }




  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    // console.log(form);

    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setErr('')
        form.reset()
        navigate(from, {replace: true});


        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage)
        setErr(errorMessage)
      });
    
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

          <p className=" text-danger">
            {
                err
            }
          </p>
         
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
