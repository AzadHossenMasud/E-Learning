import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider/AuthProvider";
import { FaBeer, FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  const { userLoginWithGoogle, userLoginWithGithub, createUser, updateUserInfo } =
    useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(userLoginWithGoogle);
  const providerGoogle = new GoogleAuthProvider();
  const providerGitHub = new GithubAuthProvider();


  const handleGoogle = () => {
    userLoginWithGoogle(providerGoogle)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  const handleGithub = () => {
    userLoginWithGithub(providerGitHub)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, imageUrl, email, password);

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        handleUserProfile(name, imageUrl)
        navigate("/");
        form.reset();
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

  const handleUserProfile =(name, imageUrl)=>{
    const profile = {
        displayName : name,
        photoURL: imageUrl
    }
    updateUserInfo(profile)
    .then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });

  }

  return (
    <div>
      <Container className=" d-flex justify-content-center">
        <form onSubmit={handleSubmit} className=" w-50">
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label>Image URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Image URL"
              name="imageUrl"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <div>
            <p className="mt-3">
              Have an Account??{" "}
              <Link className="" to="/login">
                Sign In
              </Link>{" "}
              Here
            </p>
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

export default Register;
