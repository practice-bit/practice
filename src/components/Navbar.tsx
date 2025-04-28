import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
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
  const [isDialogLoginOpen, setIsDialogLoginOpen] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogin = () => {
    setIsDialogLoginOpen(!isDialogLoginOpen);
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
          </span>{" "}
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
          
          <Dialog open={isDialogLoginOpen} onOpenChange={setIsDialogLoginOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-700 hover:text-youth-purple hover:bg-gray-100"
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
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Sign In</DialogTitle>
                <DialogDescription>
                  Please provide your details to sign in.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone Number
                  </Label>
                  <Input id="phone" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" className="col-span-3" />
                </div>
                <Button >Submit</Button>
              </div>
            </DialogContent>
          </Dialog>

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
             <Dialog open={isDialogLoginOpen} onOpenChange={setIsDialogLoginOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 justify-start"
                  onClick={() => {
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
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Sign In</DialogTitle>
                  <DialogDescription>
                    Please provide your details to sign in.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone" className="text-right">
                      Phone Number
                    </Label>
                    <Input id="phone" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input id="email" className="col-span-3" />
                  </div>
                  <Button >Submit</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )} 
    </nav>
  );
};

export default Navbar;
