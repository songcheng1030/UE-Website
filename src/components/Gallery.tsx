import tw, { styled } from "twin.macro";
import { useState, useEffect } from "react";
import RectangleBlue from "../assets/images/Rectangle-blue.png";
import videoImg from "../assets/images/video-img.png";
import { useMediaQuery } from "react-responsive";

const Gallery = () => {
  const [isMore, setMore] = useState(false);
  const goLink = (url: string) => {
    window.location.href = url;
  };
  const isSmall = useMediaQuery({ query: "(max-width: 380px)" });
  const isXSmall = useMediaQuery({ query: "(max-width: 320px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 290px)" });

  return (
    <div tw="relative container mx-auto lg:mt-[200px] md:mt-[90px] sm:mt-[70px] mt-[50px]">
      <div tw="lg:grid lg:grid-cols-3 items-start lg:mt-[60px] md:mt-[40px] sm:mt-[30px] mt-[20px] lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
        <div tw="lg:col-span-1 flex items-center mt-3">
          <img alt="metamask" src={RectangleBlue} />
          <div tw="font-quattrocento xl:text-[30px] md:text-[26px] sm:text-[21px] text-[16px] font-bold text-[#2B393E] uppercase ml-2.5">
            Gallery
          </div>
        </div>
        <div
          tw="lg:col-span-2 lg:mt-0 md:mt-[20px] mt-[10px] font-unbounded_earth font-normal xl:text-[35px] md:text-[30px] sm:text-[24px] text-[19px] text-[#121D1F] uppercase"
          css={[isXSmall && tw`text-[17px]`, is2XSmall && tw`text-[15px]`]}
        >
          UNBOUNDED.EARTH IS PROUD TO SHOW OFF WHAT{" "}
          <span tw="text-gray-50/40">WE HAVE BEEN BUILDING</span> WITH OUR
          COMMUNITY!
          <br></br>HAVE BUILT!
        </div>
      </div>
      <div tw="justify-center grid lg:grid-cols-3 lg:gap-4 lg:mt-[100px] md:mt-[40px] sm:mt-[20px] mt-[10px] lg:pb-[80px] md:pb-[40px] sm:pb-[20px] pb-[10px]">
        <div tw="lg:col-span-1 lg:pr-[100px] flex flex-col justify-between">
          <div tw="lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
            <div tw="font-quattrocento font-normal text-gray-50/50">
              Our community is the best! We’re not just saying that, too - many
              Unbounded.Earthlings have been learning how to create 3D assets in
              MagicaVoxel and Blender to use on their metaverse land or even
              sell to other virtual land owners.
            </div>
            <div tw="font-quattrocento font-normal text-gray-50/50 lg:mt-[40px] md:mt-[20px] mt-[10px]">
              Feel like riding on a ferris wheel? How about a round of miniature
              golf? Check out some of our community’s work mixed in with concept
              art from 3D designers on the U.E Team!
            </div>
          </div>
          <a
            tw="font-quattrocento lg:text-base md:text-[15px] sm:text-[14px] text-[12px] text-[#F4F4F4] uppercase bg-[#175E74] w-full h-[60px] rounded-full lg:my-[0px] my-[10px] flex justify-center items-center hover:text-[#F4F4F4]"
            css={[isSmall && tw`h-[50px]`, isXSmall && tw`h-[40px]`]}
            href="/gallery"          
          >
            See more
          </a>
        </div>
        <div tw="lg:col-span-2">
          {!isMore && <img alt="videoImg" src={videoImg} tw="rounded-[10px]" />}
          {isMore && (
            <div tw="flex flex-wrap gap-[20px] justify-center items-center">
              <img alt="videoImg" src={videoImg} tw="w-[40%] h-[40%]" />
              <img alt="videoImg" src={videoImg} tw="w-[40%] h-[40%]" />
              <img alt="videoImg" src={videoImg} tw="w-[40%] h-[40%]" />
              <img alt="videoImg" src={videoImg} tw="w-[40%] h-[40%]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
