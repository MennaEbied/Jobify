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
          },
          {
            path: "stats",
            element: <Stats />,
          },
           {
            path: "all-jobs",
            element: <AllJobs />,
          },
           {
            path: "profile",
            element: <Profile />,
          },
           {
            path: "admin",
            element: <Admin/>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
