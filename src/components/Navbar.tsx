import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center py-4">
      <div>
        <Link to="/" className="logo">
          <img
            className="w-44"
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Logo Pokedex"
          />
        </Link>
      </div>
      <div>
        <form className="flex space-x-2">
          <input
            className="border border-gray-300 h-11 focus:outline-none focus:ring-1 focus:ring-[#323099] transition duration-500 font-sans text-base text-gray-800 px-4 rounded-xl w-72 "
            placeholder="Pikachu"
            type="text"
          />
          <button
            type="submit"
            className="text-white bg-[#323099] transition-all duration-200 ease-linear hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
