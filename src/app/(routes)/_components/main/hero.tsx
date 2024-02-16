import Image from "next/image";

function Hero() {
  return (
    <div className="bg-[url('/assests/images/hero.jpeg')]   bg-cover bg-center h-[700px]">
      <div className="flex justify-between gap-16 px-32">
        <div className="pt-40 text-[#3f7884] ">
          <h1 className="text-5xl font-light not-italic leading-[57px]">
            EMR,Billing and <br /> Insurance
          </h1>
          <p className="text-[#3f7884] mt-10 text-[19px] not-italic font-normal  ">
            Secure,Integrated and easy to use
          </p>
          <button className="text-[#fffefe] text-[16px] leading-[24px] not-italic  font-bold  rounded-full h-14 w-56 px-0 mt-12 transition-all duration-300      hover:bg-[#1C505B] bg-[#3791a4] ">
            Request Demo
          </button>
        </div>
        <div className="pt-28">
          <Image src="/assests/images/pic.png" alt="" height={80} width={510} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
