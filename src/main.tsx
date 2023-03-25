import ReactDOM from "react-dom/client";
// Router
import { router } from "./Router";
// Libraries
import { RouterProvider } from "react-router-dom";
// Styles
import "./index.css";
// Context
import { PokemonProvider } from "./context/PokemonProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
