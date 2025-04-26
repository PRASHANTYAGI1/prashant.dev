import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger and close icons

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 flex items-center justify-between w-full px-6 py-4 text-white bg-white/10 backdrop-blur-md shadow-white-lg">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide text-cyan-400/100">
        PrasHAnt ➿
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden space-x-6 text-lg font-medium md:flex">
        {["Home", "Projects", "About", "Contact"].map((item) => (
          <li key={item}>
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300"
                  : "hover:text-cyan-300 transition"
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute p-4 space-y-4 text-center rounded-lg shadow-lg text-zinc-300 top-20 right-6 bg-white/20 backdrop-blur-md md:hidden">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300"
                    : "hover:text-cyan-300 transition"
                }
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
