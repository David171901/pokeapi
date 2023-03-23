import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { Pokemon } from "./pages/Pokemon";
import { Layout } from "./layout/Layout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
      children: [
        { 
          index: true, 
          element: <Home /> 
        },
        {
          path: "pokemon/:id",
          element: <Pokemon />,
        },
      ],
    },
]);