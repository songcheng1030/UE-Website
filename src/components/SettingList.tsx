import "twin.macro";
import { useState, useEffect } from "react";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationLeft2 from "../assets/images/decorationLeft2.png";
import burger1 from "../assets/images/burger1.png";
import burger2 from "../assets/images/burger2.png";
import burger3 from "../assets/images/burger3.png";
import burger4 from "../assets/images/burger4.png";
import burger5 from "../assets/images/burger5.png";
import burger6 from "../assets/images/burger6.png";
import blueTree from "../assets/images/blue-tree4.png";
import twitter from "../assets/images/icons/twitter.svg";
import youtube from "../assets/images/icons/youtube.png";
import twitch from "../assets/images/icons/twitch.png";
import discord from "../assets/images/icons/discord.png";

const SettingList = () => {
  const goLink = (url: string) => {
    window.location.href = url;
  };

  return (
    <div tw="relative lg:mt-[150px] md:mt-[70px] sm:mt-[50px] mt-[50px]">
      <img
        tw="absolute top-[24px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationLeft"
        src={decorationLeft}
      />
      <img
        tw="absolute lg:top-[280px] top-[120px] lg:left-[520px] left-[200px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationLeft2"
        src={decorationLeft2}
      />
      <img
        tw="absolute bottom-[220px] lg:right-[720px] md:right-[500px] right-[300px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationLeft2"
        src={decorationLeft2}
      />
      <img
        tw="absolute mix-blend-multiply bottom-[0px] right-[0px] lg:w-[550px] md:w-[400px] sm:w-[300px] w-[220px]"
        alt="blueTree"
        src={blueTree}
      />
      <div tw="relative container mx-auto lg:pb-[100px] pb-[50px]">
        <div tw="lg:grid-cols-3 md:grid-cols-2 sm:grid items-start mt-[60px] lg:gap-[40px] md:gap-[20px]">
          <a
            tw="relative cursor-pointer mb-[20px]"
            href="/buy"                
          >
            <img tw="w-full" alt="burger2" src={burger2} />
            <div tw="absolute bottom-[24px] left-[24px] font-quattrocento lg:text-base text-[14px] font-bold text-[#DAE7EB] uppercase ml-2.5">
              Buy
            </div>
          </a>
          <a
            tw="relative cursor-pointer mb-[20px]"
            href="/stake"         
          >
            <img tw="w-full" alt="burger5" src={burger5} />
            <div tw="absolute bottom-[24px] left-[24px] font-quattrocento lg:text-base text-[14px] font-bold text-[#DAE7EB] uppercase ml-2.5">
              Stake
            </div>
          </a>
          <a
            tw="relative cursor-pointer mb-[20px]"
            href="https://explorer.unbounded.earth"
            target="_blank"         
          >
            <img tw="w-full" alt="burger4" src={burger4} />
            <div tw="absolute bottom-[24px] left-[24px] font-quattrocento lg:text-base text-[14px] font-bold text-[#DAE7EB] uppercase ml-2.5">
              World Map Explorer
            </div>
          </a>
          <a
            tw="relative cursor-pointer mb-[20px]"
            href="/roadmap"                 
          >
            <img tw="w-full" alt="burger6" src={burger6} />
            <div tw="absolute bottom-[24px] left-[24px] font-quattrocento lg:text-base text-[14px] font-bold text-[#DAE7EB] uppercase ml-2.5">
              Roadmap
            </div>
          </a>
          <a
            tw="relative cursor-pointer mb-[20px]"
            href="/litepaper"     
          >
            <img tw="w-full" alt="burger3" src={burger3} />
            <div tw="absolute bottom-[24px] left-[24px] font-quattrocento lg:text-base text-[14px] font-bold text-[#DAE7EB] uppercase ml-2.5">
              Litepaper / EarthPaper
            </div>
          </a>
          <a
            tw="relative cursor-pointer mb-[20px]"
            href="/faq"    
          >
            <img tw="w-full" alt="burger1" src={burger1} />
            <div tw="absolute bottom-[24px] left-[24px] font-quattrocento lg:text-base text-[14px] font-bold text-[#DAE7EB] uppercase ml-2.5">
              Faq
            </div>
          </a>
        </div>
      </div>
      <div tw="relative container flex justify-between mx-auto">
        <div tw="lg:text-lg md:text-[17px] sm:text-[16px] text-[15px]">
          <div tw="flex">
            {/* <div tw="font-quattrocento text-[#878A94] underline cursor-pointer invisible">
              Copyright Notice
            </div> */}
            <a
              tw="font-quattrocento text-[#878A94] underline ml-4 cursor-pointer"
              href="/service_terms"         
            >
              Terms of Service
            </a>
          </div>
          {/* <div tw="font-quattrocento text-[#878A94] underline lg:mt-4 mt-2 cursor-pointer invisible">
            Privacy Policy
          </div> */}
        </div>
        <div>
          <div tw="font-quattrocento text-gray-50 font-bold lg:text-lg md:text-[17px] sm:text-[16px] text-[15px] text-right">
            Follow our updates:
          </div>
        </div>
      </div>
      <div tw="relative container mx-auto xl:mt-4 mt-6 lg:pb-[100px] md:pb-[40px] sm:pb-[20px] pb-[20px]">
        <div tw="lg:absolute xl:right-[90px] lg:right-[70px] flex justify-center lg:gap-0 gap-[20px]">
          <a
            tw="bg-[#C1CFD3] lg:w-[60px] md:w-[50px] sm:w-[40px] w-[35px] lg:h-[60px] md:h-[50px] sm:h-[40px] h-[35px] lg:p-[12px] md:p-[8px] sm:p-[6px] p-[4px] flex justify-center items-center mr-3 rounded-lg"
            target="_blank"
            href="https://discord.gg/unboundedearth"
          >
            <img alt="discord" src={discord} tw="w-full h-full" />
          </a>
          <a
            tw="bg-[#C1CFD3] lg:w-[60px] md:w-[50px] sm:w-[40px] w-[35px] lg:h-[60px] md:h-[50px] sm:h-[40px] h-[35px] lg:p-[12px] md:p-[8px] sm:p-[6px] p-[4px] flex justify-center items-center mr-3 rounded-lg"
            target="_blank"
            href="https://twitter.com/Unbounded_Earth"
          >
            <img alt="twitter" tw="w-full h-full" src={twitter} />
          </a>
          <a
            tw="bg-[#C1CFD3] lg:w-[60px] md:w-[50px] sm:w-[40px] w-[35px] lg:h-[60px] md:h-[50px] sm:h-[40px] h-[35px] lg:p-[12px] md:p-[8px] sm:p-[6px] p-[4px] flex justify-center items-center mr-3 rounded-lg"
            target="_blank"
            href="https://www.youtube.com/channel/UCHHdJsmdNPPOhkZteMCUnBw?sub_confirmation=1"
          >
            <img alt="youtube" tw="w-full h-full" src={youtube} />
          </a>
          <a
            tw="bg-[#C1CFD3] lg:w-[60px] md:w-[50px] sm:w-[40px] w-[35px] lg:h-[60px] md:h-[50px] sm:h-[40px] h-[35px] lg:p-[12px] md:p-[8px] sm:p-[6px] p-[4px] flex justify-center items-center mr-3 rounded-lg"
            target="_blank"
            href="https://www.twitch.tv/unboundedearth"
          >
            <img alt="twitch" tw="w-full h-full" src={twitch} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SettingList;
