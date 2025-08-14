import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-end md:justify-between p-4 relative">
      <div className="flex justify-between items-center gap-4 w-[70%] md:w-full">
        <Image
          src="/logo.svg"
          alt="logo"
          width={174}
          height={74}
          className="p-6 md:p-0 object-contain"
        />

        <Image
          src="/hand-barger.svg"
          alt="menu"
          width={24}
          height={24}
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 font-semibold text-[#A9A9A9] text-lg w-full justify-end">
        <Link href="/about" className="hover:text-primary transition">
          About us
        </Link>
        <Link href="/contact" className="hover:text-primary transition">
          Contact
        </Link>
        <Link href="/get-started" className="hover:text-primary transition">
          Get started
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-4 z-20 bg-white text-black p-4 rounded shadow-lg md:hidden flex flex-col gap-3 w-48">
          <Link
            href="/about"
            className="text-lg font-semibold hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/get-started"
            className="text-lg font-semibold hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Get started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
