"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? "backdrop-blur-sm   shadow-md" : "bg-transparent"
      } text-white`}
    >
      <div className="flex justify-between items-center lg:px-[119px] px-7 p-4">
        <div className="flex items-center justify-between w-full">
          <div className="mr-4 text-black">
           <Link href="/" >
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
                <RxHamburgerMenu className="border-[1px] border-gray-400 text-blue-950 w-12 h-10" />
                {/* <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg> */}
              </button>
            </div>
          </div>
          <div className=" font-bold  text-[16px]  gap-10 hidden lg:flex">
            <Link href="/">
              <button className="text-[#316069] mt-3">Home</button>
            </Link>
            <Link href="/ourservices">
              <button className="text-[#316069] mt-3   ">Services</button>
            </Link>
            <Link href="/aboutus">
              <button className="text-[#316069] mt-3  "> About Us</button>
            </Link>
            <Link href="/contactus">
              <button className="text-[#316069] mt-3   ">Contact Us</button>
            </Link>

            {/* <button className="text-[#316069]">Company</button>
            <button className="text-[#316069]">Resources</button> */}

            <button className="text-white text-sm border-2 rounded-full h-[50px]   px-6  border-white hover:text-[#316069] hover:border-[#315a61] hover:bg-transparent bg-[#1a363b] transition-all duration-300">
              Request Demo
            </button>
          </div>
          <div
            className={`absolute  text-center w-full bg-[#f3f6f7] mt-12 top-14 text-black right-0  transition-max-height duration-500 ease-in-out overflow-hidden ${
              isOpen ? "max-h-72" : "max-h-0"
            }`}
          >
            <Link href="/">
              <p className="mt-3">Home</p>
            </Link>
            <Link href="/ourservices">
            <p className="mt-3">Services</p>
            </Link>

            <Link href="/aboutus">
            <p className="mt-3">About Us</p>
            </Link>

            <Link href="/contactus">
            <p className="mt-3">Contact Us</p>
            </Link>
            <button className="text-white text-sm border-2 my-3 rounded-full h-[40px] px-6  border-white hover:text-[#316069] hover:border-[#315a61] hover:bg-transparent bg-[#1a363b] transition-all duration-1000">
              Request Demo
            </button>

            {/* <button className="block lg:hidden focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div
//       className={`transition-all duration-300 ease-in-out fixed top-0 w-full ${
//         isScrolled ? "bg-[#F0F4F9] shadow-md" : "bg-transparent"
//       } text-white`}
//     >
//       <div className="flex justify-between items-center px-32 p-5">
//         <div className="flex items-center justify-between w-full">
//           <div className="mr-4 text-black">
//             <Image
//               src="/svgs/d55bb295d2a8b570c3560064ee726527-ai (5).svg"
//               alt=""
//               height={50}
//               width={118}
//             />
//           </div>
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-black">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//           <div className=" font-bold   gap-10 hidden md:flex">
//             <button className="text-[#316069]">Solutions</button>
//             <button className="text-[#316069]">Pricing</button>
//             <button className="text-[#316069]">Company</button>
//             <button className="text-[#316069]">Resources</button>
//             <button className="text-white text-sm border-2 rounded-full h-[50px] px-6  border-white hover:text-[#316069] hover:border-[#315a61] hover:bg-transparent bg-[#1a363b] transition-all duration-300">
//               Request Demo
//             </button>
//           </div>
//         </div>
//       </div>
//       <nav className={`flex-col ${isOpen ? "block" : "hidden "} `}>
//         <ul className="flex-col gap-8 items-center border-t text-black text-center flex md:hidden ">
//           <li className="md:ml-4">Solutions</li>
//           <li className="md:ml-4">Pricing</li>
//           <li className="md:ml-4">Company</li>
//           <li className="md:ml-4">Company</li>
//           <li className="md:ml-4">Company</li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Header;

// "use client";
// import Image from "next/image";

// function Header() {
//   return (
//     <div className="w-full px-32 mt-5">
//       <div className=" flex justify-between">
//         <div>
//           <Image
//             src="/svgs/d55bb295d2a8b570c3560064ee726527-ai (5).svg"
//             alt=""
//             height={80}
//             width={118}
//           />
//         </div>
//         <div className="flex  not-italic  font-bold text-[16px] leading-[24px] text-[#316069]    gap-10">
//           <button className=" ">Solutions</button>
//           <button className="">Pricing</button>
//           <button className="">Company</button>
//           <button className="">Resources</button>
//           <button className="text-white  border-2 rounded-full text-[14px] leading-[21px] h-[50px] px-6 mt-3 border-white hover:text-[#316069] hover:border-[#315a61] hover:bg-transparent bg-[#1a363b] transition-all duration-300">
//             Request Demo
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
