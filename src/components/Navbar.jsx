import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"; // for React Router v6+
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Projects", to: "/projects", isRoute: true }, // use route for projects!
  { label: "Skills", to: "skills" },
  { label: "Achievements", to: "achievements" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/30 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent select-none">
          SE
        </span>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-7 items-center">
          {navLinks.map((link) =>
            link.isRoute ? (
              <RouterLink
                key={link.to}
                to={link.to}
                className="cursor-pointer capitalize text-white transition-all hover:text-cyan-400"
              >
                {link.label}
              </RouterLink>
            ) : (
              <ScrollLink
                key={link.to}
                activeClass="text-cyan-400 border-b-2 border-cyan-400"
                to={link.to}
                spy={true}
                smooth={true}
                duration={600}
                className="cursor-pointer capitalize text-white transition-all hover:text-cyan-400"
              >
                {link.label}
              </ScrollLink>
            )
          )}
          <ThemeSwitcher />
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenu((m) => !m)}
        >
          ☰
        </button>
        {/* Mobile Menu Dropdown */}
        {mobileMenu && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black/80 py-6 flex flex-col items-center space-y-6">
            {navLinks.map((link) =>
              link.isRoute ? (
                <RouterLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenu(false)}
                  className="cursor-pointer capitalize text-white text-lg"
                >
                  {link.label}
                </RouterLink>
              ) : (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={600}
                  onClick={() => setMobileMenu(false)}
                  className="cursor-pointer capitalize text-white text-lg"
                >
                  {link.label}
                </ScrollLink>
              )
            )}
            <ThemeSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
}
