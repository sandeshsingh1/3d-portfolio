import { NavLink } from "react-router-dom";
import resume from "../assets/resume/Sandesh-Singh-Resume.pdf";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
          {/* Resume Button */}
        <a
          href={resume}
          download
          className="btn btn-outline"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
