import Image from "next/image";

import Link from "next/link";
import Description from "@/public/description.svg";
import Work from "@/public/work.svg";
import Contact from "@/public/contact.svg";

export default function Navbar() {
  return (
    <div>
      {/* Mobile navbar */}
      <nav className="fixed bottom-0 left-0 w-full h-fit bg-white/10 backdrop-blur-sm md:flex md:justify-center z-50 lg:top-0">
        <ul className="w-full flex justify-evenly text-white text-opacity-65">
          <li className="w-1/3 flex justify-center py-4 md:py-6">
            <Link
              href={"#about"}
              className="flex flex-col items-center lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out"
            >
              <Image
                src={Description}
                alt="about"
                className="opacity-70 w-6 md:w-8"
              />
              <p className="text-sm md:text-md">About</p>
            </Link>
          </li>
          <li className="w-1/3 flex justify-center py-4 md:py-6">
            <Link
              href={"#projects"}
              className="flex flex-col items-center lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out"
            >
              <Image
                src={Work}
                alt="projects"
                className="opacity-70 w-6 md:w-8"
              />
              <p className="text-sm md:text-md">Projects</p>
            </Link>
          </li>
          <li className="w-1/3 flex justify-center py-4 md:py-6">
            <Link
              href={"#contact"}
              className="flex flex-col items-center lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out"
            >
              <Image
                src={Contact}
                alt="contact"
                className="opacity-70 w-6 md:w-8"
              />
              <p className="text-sm md:text-md">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
