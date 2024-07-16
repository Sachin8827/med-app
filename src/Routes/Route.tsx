import * as React from "react";
import { useRoutes } from "react-router-dom";
import LayOut from "../components/common/Layout";
import ChangeAccount from "../Pages/ChangeAccount";
import CheckEmail from "../Pages/CheckEmail";
import EditProfile from "../Pages/EditProfile";
import ErrorComponent from "../Pages/ErrorMsg";
import ForgotPassword from "../Pages/ForgetPassword";
import HealthForm from "../Pages/HealthTest";
import HomePage from "../Pages/HomePage";
import InvalidLink from "../Pages/InvalidLink";
import Login from "../Pages/Login";
import ResetPassword from "../Pages/ResetPassword";
import SignUp from "../Pages/SignUp";
import StatisticsPage from "../Pages/Statistics";
import SummaryScreenPage from "../Pages/SummaryScreenPage";
import HelpCenter from "../Pages/HelpCenter";

const ApplicationRoutes: React.FC = () => {

  const element = useRoutes([
    {
      path: '/',
      element: <LayOut />,
      children: [
        {
          path: '/home',
          element: <HomePage />
        },
        {
          path: '/healthtest',
          element: <HealthForm />
        },
        {
          path: '/statistics',
          element: <StatisticsPage />
        },
        {
          path: '/account',
          element: <ChangeAccount />
        },
        {
          path: '/edit',
          element: <EditProfile />
        },
        {
          path : '/helpcenter',
          element  : <HelpCenter/>
        }
      ]
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/forgot',
      element: <ForgotPassword />
    },
    {
      path: '/checkemail/:email',
      element: <CheckEmail />
    },
    {
      path: '/reset',
      element: <ResetPassword />
    },
    {
      path: '/invalid',
      element: <InvalidLink />
    },
    {
      path: '/summary',
      element: <SummaryScreenPage />
    },

    {
      path: '*',
      element: <ErrorComponent />
    }
  ])

  return <>
    {element}
  </>
}
export default ApplicationRoutes;
