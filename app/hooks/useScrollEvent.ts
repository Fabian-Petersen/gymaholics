// $ Import React Hooks
import React, { useEffect } from "react";

type scrollEventProps = {
  setHeaderActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const useScrollEvent = (
  setHeaderActive: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // $ Handle Navbar Scroll Event
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
  }, [setHeaderActive]);
};
export default useScrollEvent;
