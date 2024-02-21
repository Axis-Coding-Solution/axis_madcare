import Image from "next/image";

function Hero() {
  return (
    <div className="bg-[url('/assests/images/hero.jpeg')]   bg-cover bg-center max-[320px]:h-[780px] max-[375px]:h-[860px] max-[425px]:h-[860px]  sm:h-[750px]">
      <div className="flex flex-col sm:flex-row lg:justify-between lg:items-center    lg:gap-16 gap-8 lg:pl-28 xl:pl-[117px] px-10 md:px-5 lg:px-0 xl:px-16 ">
        <div className=" md:pt-32 lg:pt-12  xl:pt-0 text-[#3f7884] ">
          <h1 className=" text-5xl md:text-[30px] lg:text-[30px]    xl:text-5xl  lg:text-start text-center font-light not-italic leading-[57px]">
            EMR,Billing and <br /> Insurance
          </h1>
          <p className="text-[#3f7884] text-center lg:text-left mt-10 text-[19px] not-italic font-normal  ">
            Secure,Integrated and easy to use
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="text-[#fffefe] text-[16px] leading-[24px] not-italic  font-bold  rounded-full h-14 w-56 px-0 mt-12 transition-all duration-300      hover:bg-[#1C505B]  bg-[#3791a4] ">
              Request Demo
            </button>
          </div>
        </div>
        <div className="pt-28 md:pt-24 lg:pt-28 lg:pr-0 sm:px-10 xl:pr-[52px] order-first sm:order-last">
          <Image src="/assests/images/pic.png" alt="" height={80} width={550} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
