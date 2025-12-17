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
import AddContest from "../pages/Dashboard/ContestCreator/AddContest";
import MyCreatedContests from "../pages/Dashboard/ContestCreator/MyCreatedContests";
import SubmitedTasksperContest from "../pages/Dashboard/ContestCreator/SubmitedTasksperContest";
import UpdateContests from "../pages/Dashboard/ContestCreator/UpdateContests";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageContests from "../pages/Dashboard/Admin/ManageContests";

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
      {
        path: "add-contest",
        element: (
          <PrivateRoute>
            <AddContest />
          </PrivateRoute>
        ),
      },
      {
        path: "my-crtd-context",
        element: (
          <PrivateRoute>
            <MyCreatedContests />
          </PrivateRoute>
        ),
      },
      {
        path: "submiteted-tasks",
        element: (
          <PrivateRoute>
            <SubmitedTasksperContest />
          </PrivateRoute>
        ),
      },
      {
        path: "update-contests",
        element: (
          <PrivateRoute>
            <UpdateContests />
          </PrivateRoute>
        ),
      },

      // Admin Creator
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-contests",
        element: (
          <PrivateRoute>
            <ManageContests />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
