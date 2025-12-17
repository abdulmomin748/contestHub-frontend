import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";

import MainLayout from "../layouts/MainLayout";

import { createBrowserRouter } from "react-router";
import AllContests from "../pages/AllContests/AllContests";
import ContestDetails from "../pages/ContestDetails/ContestDetails";
import MyParticipatedContest from "../pages/Dashboard/User/MyParticipatedContest";
import MyWinningContest from "../pages/Dashboard/User/MyWinningContest";
import Profile from "../pages/Dashboard/User/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-contests",
        element: <AllContests />,
      },
      {
        path: "/contest/:id",
        element: <ContestDetails />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // user
      {
        index: true,
        element: (
          <PrivateRoute>
            <MyParticipatedContest />
          </PrivateRoute>
        ),
      },
      {
        path: "my-participated-cont",
        element: (
          <PrivateRoute>
            <MyParticipatedContest />
          </PrivateRoute>
        ),
      },
      {
        path: "my-Winning-cont",
        element: (
          <PrivateRoute>
            <MyWinningContest />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      // contest Creator
    ],
  },
]);
