import Image from "next/image";

function Hero() {
  return (
    <div className="bg-[url('/assests/images/hero.jpeg')]   bg-cover bg-center h-[750px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center   lg:gap-16 gap-8 lg:pl-28 px-16">
        <div className="pt-16 sm:pt-44 lg:pt-0 text-[#3f7884] ">
          <h1 className="text-5xl lg:text-start text-center font-light not-italic leading-[57px]">
            EMR,Billing and <br /> Insurance
          </h1>
          <p className="text-[#3f7884] text-center lg:text-left mt-10 text-[19px] not-italic font-normal  ">
            Secure,Integrated and easy to use
          </p>
          <div className="flex justify-center sm:justify-start">
          <button className="text-[#fffefe] text-[16px] leading-[24px] not-italic  font-bold  rounded-full h-14 w-56 px-0 mt-12 transition-all duration-300      hover:bg-[#1C505B] bg-[#3791a4] ">
            Request Demo
          </button>
          </div>
        </div>
        <div className="pt-28 lg:pr-28 sm:px-10 xl:pr-14 order-first sm:order-last">
          <Image src="/assests/images/pic.png" alt="" height={80} width={550} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
