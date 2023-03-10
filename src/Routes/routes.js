import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import About from "../Pages/Home/About/About";
import Media from "../Pages/Home/AllMedia/Media";
import CommingSoon from "../Pages/Home/CommingSoon/CommingSoon";
import Detail from "../Pages/Home/Details/Detail";
import Login from "../Pages/Login&SignUp/Login";
import SignUp from "../Pages/Login&SignUp/SignUp";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/meassage", element: <CommingSoon /> },
      { path: "/media", element: <Media /> },
      {
        path: "/media/:id",
        element: <Detail />,
        loader: ({ params }) =>
          fetch(`https://server-side-ten.vercel.app/post/${params.id}`),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);
