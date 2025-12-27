import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import resume from "../assets/resume/Sandesh-Singh-Resume.pdf";
import { logo } from "../assets/images";

const Navbar = () => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="header flex items-center justify-between">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
      </NavLink>

      <nav className="flex items-center text-lg gap-6 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600"
              : "text-black hover:text-blue-500 transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600"
              : "text-black hover:text-blue-500 transition"
          }
        >
          Projects
        </NavLink>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-xl px-2 transition"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Resume Button */}
        <a href={resume} download className="btn btn-outline">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
