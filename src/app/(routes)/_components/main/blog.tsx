import React from "react";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";

function Blog() {
  const blogPosts = [
    {
      category: "Health",
      date: "Nov 21, 2021",
      title: "COVID-19: The Most Up-to-Date Information",
      imageSrc: "/assests/images/covid-19.png",
    },
    {
      category: "Lifestyle",
      date: "Nov 25, 2021",
      title: "Importance of Accreditation for Laboratories",
      imageSrc: "/assests/images/laboratories.png",
    },
    {
      category: "Health",
      date: "Nov 28, 2021",
      title: "The dangers of nicotine are addressed in depth",
      imageSrc: "/assests/images/nicotine.png",
    },
    {
      category: "Health",
      date: "Nov 30, 2021",
      title: "Treatment of patients with diabetes during COVID-19",
      imageSrc: "/assests/images/treatment.png",
    },
  ];
  return (
    <>
      <div className="md:pt-10 xl:mt-40  ">
        <div className="bg-[url('/assests/images/blog-post.png')] bg-no-repeat h-28 lg:h-[20vh] min-[1440px]:h-24 min-[1536px]:h-24 bg-top sm:px-40">
          <div className=" text-center  not-italic leading-[24px] pt-7 tracking-tighter text-[#3f7884] text-2xl sm:text-4xl font-normal">
            <h1 className="font-bold">RECENT BLOGPOST</h1>
          </div>
        </div>
        <div className="bg-[url('/assests/images/doctors-bg.png')]  bg-no-repeat bg-contain   xl:pb-40 ">
          <div className="xl:pt-28 mt-4 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 xl:mx-28 mx-5">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl border-gray-200  shadow-xl"
              >
                <div className="">
                  <Image
                    className="rounded-md w-[100%]"
                    src={post.imageSrc}
                    height={50}
                    width={350}
                    alt="pic"
                  />
                  <div className="mt-5 bg-[#FFFEFE] mb-9 rounded-md ">
                    <div className="flex gap-5 rounded-md">
                      <h1 className="text-[#5AA4B4] pl-5 ">{post.category}</h1>
                      <div className="flex items-center gap-2">
                        <SlCalender className="" />
                        <span className="text-xs">{post.date}</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[#3F7884] font-extrabold not-italic text-[20px] leading-[24px] text-base mt-5 pl-3">
                        {post.title}
                      </h2>
                      <p className="text-neutral-400 mt-3 font-normal text-[18px] leading-[24px] not-italic hover:underline pl-3 hover:text-[#5AA4B4] cursor-pointer">
                        Read Full Article
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
