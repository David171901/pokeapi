// Components
import { Navbar } from "../components/Navbar";
// Libraries
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main className="container mx-auto flex-col">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </main>
  );
};
