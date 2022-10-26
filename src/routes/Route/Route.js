import Main from "../../layout/Main/Main";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";

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

    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
