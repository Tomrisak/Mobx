import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/activities/dashboard/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/dashboard/form/ActivityForm";
import ActivityDetails from "../../features/activities/dashboard/details/ActivityDetails";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "activities", element: <ActivityDashboard></ActivityDashboard> },
      { path: "activities/:id", element: <ActivityDetails></ActivityDetails> },
      { path: "createActivity", element: <ActivityForm key='create'></ActivityForm>},
      { path: "manage/:id", element: <ActivityForm key='manage'></ActivityForm> },

    ],
  },
];
export const router = createBrowserRouter(routes);
