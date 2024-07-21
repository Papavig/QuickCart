import { useState } from "react";

import { UserRound, ShoppingCart, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const MobileMenu = () => {
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
              <Link to={"#"}>WOMEN</Link>
              <Link to={"#"}>MEN</Link>
              <Link to={"#"}>ACCESSORIES</Link>
            </div>
            <div className="flex flex-col justify-end space-y-6 p-4">
              <Link
                to={"/SignIn"}
                className="flex items-center space-x-2 hover:scale-105 duration-200"
              >
                <UserRound className="h-4 w-auto mr-1" />
                SIGN IN
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
  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center justify-between py-[1.25rem] px-8 bg-white shadow-sm">
        <div className="flex items-center justify-start">
          <Link to={"/"} className="px-2 pb-1 text-3xl font-bold font-cursive">
            QuickCart
          </Link>
        </div>
        <div className="hidden sm:flex justify-center space-x-4">
          <Underline href="#">WOMEN</Underline>
          <Underline href="#">MEN</Underline>
          <Underline href="#">ACCESSORIES</Underline>
        </div>
        <div className="hidden sm:flex justify-end space-x-6 px-2 pb-1 items-center">
          <Link
            to={"/sign-in"}
            className="flex items-center space-x-2 hover:scale-105 duration-200"
          >
            <UserRound className="h-4 w-auto mr-1" />
            SIGN IN
          </Link>
          <Link
            to={"/"}
            className="flex items-center space-x-2 hover:scale-105 duration-200"
          >
            <ShoppingCart className="h-5 w-auto mr-1 opacity-90 hover:scale-110 duration-200 ease-in-out transition-transform  hover:text-[#e5383b]" />
          </Link>
        </div>
        <MobileMenu />
      </nav>
    </>
  );
}

export default Navbar;
