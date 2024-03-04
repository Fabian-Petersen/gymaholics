"use client";

import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Button from "../Button";
import { useState, useEffect } from "react";
import MobileNavMenuButton from "./MobileNavMenuButton";
type Props = {};

function Header({}: Props) {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect Scroll Event
      setHeaderActive(window.scrollY > 50);
    };
    // Add Scroll Event Listener
    window.addEventListener("scroll", handleScroll);
    // return a cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerActive]);

  return (
    <header
      className={`${
        headerActive ? "h-[6rem]" : "h-[8rem]"
      } fixed top-0 w-full max-w-[1920px] bg-primary-200 h-[5.5rem] transition-all z-50`}
    >
      {/* // $ TODO Check the class "container", the responsiveness is not 100% correct due to container class on the div below  */}
      <div className="h-full w-full flex items-center justify-around mx-auto">
        {/* Logo */}
        <Logo />
        {/* Mobile Navbar - hidden on desktop screens */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[5.5rem]" : "top-[8rem]"} ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10 transition-all duration-500 text-base uppercase font-medium tracking-wider"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          } md:hidden flex flex-col text-white text-center gap-8 w-full bg-primary-200 fixed left-0 top-[124px] text-base uppercase font-medium transition-all`}
        />
        {/* Desktop Navbar - hidden on mobile screens */}
        <Navbar containerStyles="flex gap-6 hidden md:flex text-white text-base uppercase font-medium tracking-wider" />
        {/* Hide and Open menu button */}

        {/* Login and Register Button */}
        <div className="flex items-center justify-end gap-4">
          <Button
            title="Login"
            className="text-white hover:text-accent transition-all text-base uppercase font-medium tracking-wider"
          />

          <Button
            title="Register"
            className="text-white hover:text-accent transition-all text-base uppercase font-medium tracking-wider"
          />
          <MobileNavMenuButton openNav={openNav} setOpenNav={setOpenNav} />
        </div>
      </div>
    </header>
  );
}

export default Header;
