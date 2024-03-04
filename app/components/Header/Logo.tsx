import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="">
      <Image
        src={"/assets/img/logo.png"}
        width={120}
        height={50}
        alt="gym_logo"
      />
    </Link>
  );
};

export default Logo;
