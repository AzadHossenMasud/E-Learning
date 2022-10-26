import Main from "../../layout/Main/Main";
import CourseDetails from "../../pages/Courses/CourseDetails/CourseDetails";
import CourseItems from "../../pages/Courses/CourseItems/CourseItems";
import Courses from "../../pages/Courses/Courses/Courses";
import CourseSidebar from "../../pages/Courses/CourseSidebar/CourseSidebar";
import SelectedCatagory from "../../pages/Courses/SelectedCatagory/SelectedCatagory";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
      {
        path: "catagory/:id",
        element: <SelectedCatagory></SelectedCatagory>,
        loader: async ({params}) => {
            return fetch(`https://the-learning-home-server.vercel.app/catagory/${params.id}`);
          },
      },
      {
        path: "course/:id",
        element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
        loader: async ({params}) => {
            return fetch(`https://the-learning-home-server.vercel.app/course/${params.id}`);
          },
      },

    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
