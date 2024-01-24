import Image from "next/image";
import Link from "next/link";

import LinkedIn from "@/public/linkedin.svg";
import Github from "@/public/github.svg";
import Email from "@/public/email.svg";

export default function Footer() {
  return (
    <div className="flex flex-col items-center border-t-2 bg-indigo-600 w-full text-white pb-28">
      {/* Title */}
      <h1 className="text-4xl uppercase font-bold mt-6">Raul Calero</h1>

      {/* Socials */}
      <div
        className="flex flex-col items-center mt-5 border-2 p-2 rounded-lg shadow-xl shadow-black lg:w-1/4"
        id="contact"
      >
        <h2 className="text-lg underline underline-offset-4 uppercase font-bold">
          Contact
        </h2>
        <div>
          <Link
            href={"https://www.linkedin.com/in/raulcalero/"}
            className="flex items-center w-full py-2 lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out"
          >
            <Image src={LinkedIn} alt="linked-in" width={40} />
            <p className="pl-3">/raulcalero</p>
          </Link>
          <Link
            href={"https://github.com/TheCaptainKimchi"}
            className="flex items-center w-full py-2 lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out"
          >
            <Image src={Github} alt="github" width={40} />
            <p className="pl-3">CaptainKimchi</p>
          </Link>
          <Link
            href={"mailto:raulcalero7@gmail.com"}
            className="flex items-center w-full py-2 lg:hover:scale-110 lg:transition lg:duration-300 lg:ease-in-out"
          >
            <Image src={Email} alt="email" width={40} />
            <p className="pl-3">raulcalero7@gmail.com</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
