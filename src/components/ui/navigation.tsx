import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoBackround from "@/assets/logoBackround.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logoBackround}
                alt="Psytech Consulting"
                className="h-10 w-auto  rounded-lg"
                style={{ border: "1px solid #e5e7eb" }}
              />
            </Link>
          </div>

          {/* Nav Links Centered */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-semibold transition-all duration-200 hover:text-teal-700 ${
                    isActive(item.path)
                      ? "text-teal-700 border-b-2 border-teal-700 pb-1"
                      : "text-gray-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Started Button at End */}
          <div className="flex-shrink-0 hidden md:flex">
            <Button
              variant="default"
              className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-2 rounded-lg shadow-md"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0 ml-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-teal-700 bg-teal-50"
                      : "text-gray-500 hover:text-teal-700 hover:bg-teal-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
