import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className="container mx-auto h-full py-12">
      <div className="text-white flex gap-2 items-center justify-between">
        <span>&copy; Copyright 2024 Fitphysique</span>
        <ul className="flex gap-6 text-xl">
          <li>
            <Link
              href={"#"}
              className="text-white hover:text-accent transition-all"
            >
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="text-white hover:text-accent transition-all"
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="text-white hover:text-accent transition-all"
            >
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Copyright;
