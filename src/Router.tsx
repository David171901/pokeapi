import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { Pokemon } from "./pages/Pokemon";
import { Layout } from "./layout/Layout";
import { Search } from "./pages/Search";

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
          path: "search",
          element: <Search />,
        },
        {
          path: "pokemon/:id",
          element: <Pokemon />,
        },
      ],
    },
]);