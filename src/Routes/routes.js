import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Media from "../Pages/Home/AllMedia/Media";
import Login from "../Pages/Login&SignUp/Login";
import SignUp from "../Pages/Login&SignUp/SignUp";
import ErrorPage from "../Pages/Shared/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/media", element: <Media /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
