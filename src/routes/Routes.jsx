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
import Support from "../pages/Support/Support";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CreatorRoute from "./CreatorRoute";
import AdminRoute from "./AdminRoute";

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
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
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
          <CreatorRoute>
            <AddContest />
          </CreatorRoute>
        ),
      },
      {
        path: "my-crtd-context",
        element: (
          <CreatorRoute>
            <MyCreatedContests />
          </CreatorRoute>
        ),
      },
      {
        path: "submiteted-tasks/:id",
        element: (
          <CreatorRoute>
            <SubmitedTasksperContest />
          </CreatorRoute>
        ),
      },
      {
        path: "update-contests/:id",
        element: (
          <CreatorRoute>
            <AddContest />
          </CreatorRoute>
        ),
      },

      // Admin Creator
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manage-contests",
        element: (
          <AdminRoute>
            <ManageContests />
          </AdminRoute>
        ),
      },
    ],
  },
]);
