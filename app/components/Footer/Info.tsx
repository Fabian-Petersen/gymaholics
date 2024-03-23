import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// $ Icons
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const footerItemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: "linear",
    },
  },
};

function Info() {
  return (
    <motion.div variants={footerItemVariants} className="flex flex-col gap-4">
      <Link rel="stylesheet" href="">
        <Image src="/assets/img/logo.png" alt="logo" width={70} height={55} />
      </Link>
      <p className="max-w-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-xl text-accent" />
          <span>Cape Town, South Africa</span>
        </li>
        <li className="flex items-center gap-4">
          <FaPhoneAlt className="text-xl text-accent" />
          <span>(071) 324-5647</span>
        </li>
        <li>
          <Link className="flex items-center gap-4" href={"#"}>
            <FaEnvelope className="text-xl text-accent" />
            <span>fabian@email.com</span>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default Info;
