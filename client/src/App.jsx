/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Register,
  Admin,
  DashboardLayout,
  AddJob,
  Stats,
  AllJobs,
  Error,
  EditJob,
  Login,
  Profile,
  Landing,
} from "./pages";
import { action as registerAction } from "./pages/Register";
import{action as loginAction} from './pages/Login';
import {loader as dashboardLoader} from './pages/DashboardLayout'
import {action as addJobAction} from './pages/AddJob'
import {loader as allJobsLoader} from './pages/AllJobs'
import { loader as editJobLoader } from './pages/EditJob';
import { action as editJobAction } from './pages/EditJob';
import { action as deleteJobAction } from './pages/DeleteJob';




export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme)
  return isDarkTheme;
}
 checkDefaultTheme()
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction
      },
      {
        path: "dashboard",
        element: <DashboardLayout  />,
        loader:dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action:addJobAction
          },
          {
            path: "stats",
            element: <Stats />,
          },
           {
            path: "all-jobs",
            element: <AllJobs />,
            loader:allJobsLoader
          },
           {
            path: "profile",
            element: <Profile />,
          },
           {
            path: "admin",
            element: <Admin/>,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path:"delete-job/:id",
            action:deleteJobAction
          }
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
