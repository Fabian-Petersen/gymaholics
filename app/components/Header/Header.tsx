"use client";
// $ Import Components
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Button from "../Button";
import MobileNavMenuButton from "./MobileNavMenuButton";

// $ Import React Hooks
import { useState, useEffect } from "react";

// $ Import Custom Hooks
import useLogin from "@/app/hooks/useLogin";
import useRegister from "@/app/hooks/useRegister";
import useScrollEvent from "@/app/hooks/useScrollEvent";

function Header() {
  const [headerActive, setHeaderActive] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);

  const { handleLogin } = useLogin();
  const { handleRegister } = useRegister();

  // $ Handle Navbar Scroll Event
  useScrollEvent(setHeaderActive);

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
        <Navbar containerStyles="gap-6 hidden md:flex sm:gap-4 text-white text-base uppercase font-medium tracking-wider" />
        {/* Hide and Open menu button */}

        {/* Login and Register Button */}
        <div className="flex items-center justify-end gap-4">
          <Button
            title="Login"
            className="text-white hover:text-accent transition-all text-base uppercase font-medium tracking-wider"
            handleClick={handleLogin}
          />

          <Button
            title="Register"
            className="text-white hover:text-accent transition-all text-base uppercase font-medium tracking-wider"
            handleClick={handleRegister}
          />
          <MobileNavMenuButton openNav={openNav} setOpenNav={setOpenNav} />
        </div>
      </div>
    </header>
  );
}

export default Header;
