"use client";
import Image from "next/image";

function Header() {
  return (
    <div className="w-full px-32 mt-5">
      <div className=" flex justify-between">
        <div>
          <Image
            src="/svgs/d55bb295d2a8b570c3560064ee726527-ai (5).svg"
            alt=""
            height={80}
            width={118}
          />
        </div>
        <div className="flex font-bold text-primary gap-10">
          <button>Solutions</button>
          <button>Pricing</button>
          <button>Company</button>
          <button>Resources</button>
          <button className="text-white text-sm border-2 rounded-full h-[50px] px-6 mt-3 border-white hover:text-[#316069] hover:border-[#315a61] hover:bg-transparent bg-[#1a363b] transition-all duration-300">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
