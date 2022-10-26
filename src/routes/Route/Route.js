import Main from "../../layout/Main/Main";
import CourseItems from "../../pages/Courses/CourseItems/CourseItems";
import Courses from "../../pages/Courses/Courses/Courses";
import CourseSidebar from "../../pages/Courses/CourseSidebar/CourseSidebar";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Login/Register/Register";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      {
        path: "signin",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
        loader: async () => {
            return fetch('https://the-learning-home-server.vercel.app/catagories');
          },
      },

    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
