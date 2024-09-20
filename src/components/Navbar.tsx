import { useEffect, useState } from "react";

import { UserRound, ShoppingCart, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "./navbar-with-cart";

const MobileMenu = () => {

  const [username, setUsername] = useState<string | null>(null);

    
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

  return (
    <div className="flex sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Button size={"icon"} variant={"outline"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="sm:hidden flex flex-col justify-between h-full">
            <div className="flex flex-col justify-start space-y-4 p-4">
              <Link to={"/Products"}>PRODUCTS</Link>
              <Link to={"#"}>ABOUT US</Link>
              <Link to={"#"}>CONTACT US</Link>
            </div>
            <div className="flex flex-col justify-end space-y-6 p-4">
              <Link
                to={"/auth/login"}
                className="flex items-center space-x-2 hover:scale-105 duration-200"
              >
                <UserRound className="h-4 w-auto mr-1" />
                {username ? username : "SIGN IN"}
              </Link>
              <Link
                to={"/"}
                className="flex items-center space-x-2 hover:scale-105 duration-200"
              >
                <ShoppingCart className="h-4 w-auto mr-1" />
                CART
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

type UnderlineProps = {
  href: string;
  children: string;
};

const Underline: React.FC<UnderlineProps> = ({ href, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to={href} className="block py-1 px-4">
        {children}
      </Link>
      <span
        style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
        className="absolute -bottom-0 -left-0 -right-0 h-[2px] w-full bg-[#e5383b] rounded-lg origin-left transition-transform duration-500 ease-out"
      ></span>
    </div>
  );
};

function Navbar() {

  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();
    
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleClick = () => {
      if (username) {
        // Show alert with options
        const confirmLogout = window.confirm(`Are you sure you want to log out, ${username}?`);
        if (confirmLogout) {
          // Clear local storage and redirect to login
          localStorage.removeItem('username');
          localStorage.removeItem('token');
          navigate(0);
          
        }
      } else {
        navigate('/auth/login');
      }
    };

  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-between py-[1.25rem] px-8 bg-white shadow-sm">
        <div className="flex items-center justify-start">
          <Link to={"/"} className="px-2 pb-1 text-3xl font-bold font-cursive">
            QuickCart
          </Link>
        </div>
        <div className="hidden sm:flex justify-center space-x-4">
          <Underline href="/Products">PRODUCTS</Underline>
          <Underline href="/About">ABOUT US</Underline>
          <Underline href="/Contact">CONTACT US</Underline>
        </div>
        <div className="hidden sm:flex justify-end space-x-6 px-2 pb-1 items-center">
          <Link
            to={"#"}
            onClick={handleClick}
            className="flex items-center space-x-2 hover:scale-105 duration-200"
          >
            <UserRound className="h-4 w-auto mr-1" />
            {username ? username : "SIGN IN"}
          </Link>

          <Cart />
        </div>
        <MobileMenu />
      </nav>
    </>
  );
}

export default Navbar;
