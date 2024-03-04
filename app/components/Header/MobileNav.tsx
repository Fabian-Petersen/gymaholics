"use client";

import { Link as ScrollLink } from "react-scroll";
// import useMobileQuery from "../hooks/useMobileQuery";

const links = [
  {
    name: "home",
    target: "home",
    offset: -100,
  },
  {
    name: "about",
    target: "about",
    offset: -80,
  },
  {
    name: "class",
    target: "class",
    offset: -80,
  },
  {
    name: "team",
    target: "team",
    offset: 0,
  },
  {
    name: "prices",
    target: "prices",
    offset: -40,
  },
  {
    name: "testimonial",
    target: "testimonial",
    offset: 0,
  },
  {
    name: "blog",
    target: "blog",
    offset: 0,
  },
  {
    name: "contact",
    target: "contact",
    offset: 0,
  },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = false;
  // const isMobile = useMobileQuery({
  //   query: "(max-width: 640px)",
  // });

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <ScrollLink
            key={index}
            offset={link.offset}
            to={link.target}
            smooth={true}
            spy={true}
            activeClass={`${!isMobile && "active"}`}
            duration={500}
            className="cursor-pointer hover:text-accent transition-all capitalize"
          >
            {link.name}
          </ScrollLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;
