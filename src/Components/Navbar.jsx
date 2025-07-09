import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to apply active link style
  const getLinkClass = (path) =>
    `hover:text-[#FE3D0C] transition ${
      location.pathname === path ? "text-[#FE3D0C] font-semibold" : ""
    }`;

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0F172A] text-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto py-2">
        <nav className="font-poppins flex justify-between items-center p-6 relative">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            PORTFOLIO
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-semibold">
            <li>
              <Link to="/about" className={getLinkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" className={getLinkClass("/skills")}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className={getLinkClass("/projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className={getLinkClass("/contact")}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <GiHamburgerMenu size={30} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white text-black z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-5 right-5">
          <button onClick={() => setIsMenuOpen(false)}>
            <IoClose size={32} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-center justify-center h-full gap-6 font-semibold text-xl">
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/skills" onClick={() => setIsMenuOpen(false)}>
            Skills
          </Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
