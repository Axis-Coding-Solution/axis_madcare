"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-300 ease-in-out left-0 right-0 z-[100] fixed top-0 w-full ${
        isScrolled ? "backdrop-blur-sm shadow-md" : "bg-transparent"
      } text-white`}
    >
      <div className="flex justify-between items-center lg:px-[119px] px-7 p-4">
        <div className="flex items-center justify-between w-full">
          <div className="mr-4 text-black">
            <Link href="/">
              <Image
                src="/svgs/d55bb295d2a8b570c3560064ee726527-ai (5).svg"
                alt=""
                height={50}
                width={120}
              />
            </Link>
          </div>
          <div className="relative">
            <div>
              <button
                className="block  text-black lg:hidden focus:outline-none"
                onClick={toggleMenu}
              >
                <RxHamburgerMenu className="rounded-sm text-blue-950 w-10 h-10" />
              </button>
            </div>
          </div>
          <div className=" font-bold  text-[16px]  gap-10 hidden lg:flex">
            <Link href="/">
              <button className="text-[#316069] mt-3" onClick={closeMenu}>
                Home
              </button>
            </Link>
            <Link href="/ourservices">
              <button className="text-[#316069] mt-3" onClick={closeMenu}>
                Services
              </button>
            </Link>
            <Link href="/aboutus">
              <button className="text-[#316069] mt-3" onClick={closeMenu}>
                About Us
              </button>
            </Link>
            <Link href="/contactus">
              <button className="text-[#316069] mt-3" onClick={closeMenu}>
                Contact Us
              </button>
            </Link>
            <button
              className="text-white text-sm border-2 rounded-full h-[50px]   px-6  border-white hover:text-[#316069] hover:border-[#315a61] hover:bg-transparent bg-[#1a363b] transition-all duration-300"
              onClick={closeMenu}
            >
              Request Demo
            </button>
          </div>
          <div
            className={`absolute  text-center w-full bg-[#f3f6f7]  top-0 text-black right-0  transition-max-height duration-1000 ease-in-out overflow-hidden ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-7">
              <div className="flex justify-between border-b-2 pb-6">
                <Image
                  src="/svgs/d55bb295d2a8b570c3560064ee726527-ai (5).svg"
                  alt=""
                  height={50}
                  width={120}
                />
                <button
                  className="block  text-black  focus:outline-none"
                  onClick={toggleMenu}
                >
                  <RxHamburgerMenu className="rounded-sm text-blue-950 w-10 h-10" />
                </button>
              </div>
            </div>
            <Link href="/">
              <p className="mt-3" onClick={closeMenu}>
                Home
              </p>
            </Link>
            <Link href="/ourservices">
              <p className="mt-3" onClick={closeMenu}>
                Services
              </p>
            </Link>
            <Link href="/aboutus">
              <p className="mt-3" onClick={closeMenu}>
                About Us
              </p>
            </Link>
            <Link href="/contactus">
              <p className="mt-3" onClick={closeMenu}>
                Contact Us
              </p>
            </Link>
            <button
              className="text-white text-sm border-2 mt-3 mb-5  rounded-full h-[40px] px-6  border-white hover:text-[#316069] hover:border-[#315a61] hover:bg-transparent bg-[#1a363b] transition-all duration-1000"
              onClick={closeMenu}
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
