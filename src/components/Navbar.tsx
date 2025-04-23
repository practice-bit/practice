
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  LogIn,
  LogOut,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Will be replaced with actual auth

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // Simple toggle for demo purposes
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "ID Card", path: "/id-card" },
    { name: "Partners", path: "/partners" },
    { name: "Highlights", path: "/highlights" },
    { name: "Backed By", path: "/backed-by" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-youth-purple to-youth-dark-purple bg-clip-text text-transparent">
            Youth Empire
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-sm font-medium hover:text-youth-purple transition-colors ${
                  location.pathname === item.path 
                    ? "text-youth-purple border-b-2 border-youth-purple" 
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-gray-700 hover:text-youth-purple hover:bg-gray-100"
            onClick={toggleLogin}
          >
            {isLoggedIn ? (
              <>
                <LogOut size={18} />
                <span>Log Out</span>
              </>
            ) : (
              <>
                <LogIn size={18} />
                <span>Log In</span>
              </>
            )}
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base py-2 ${
                  location.pathname === item.path
                    ? "text-youth-purple font-medium"
                    : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 justify-start"
              onClick={() => {
                toggleLogin();
                setIsMenuOpen(false);
              }}
            >
              {isLoggedIn ? (
                <>
                  <LogOut size={18} />
                  <span>Log Out</span>
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  <span>Log In</span>
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
