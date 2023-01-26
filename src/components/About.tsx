import tw, { styled } from "twin.macro";
import { useState, useEffect } from "react";
import RectangleBlue from "../assets/images/Rectangle-blue.png";
import decorationLeft2 from "../assets/images/decorationLeft2.png";
import decorationRight from "../assets/images/decoration-right.png";
import blueTree from "../assets/images/blue-tree.png";

const About = () => {
  return (
    <div tw="relative lg:mt-[80px] md:mt-[60px] sm:mt-[50px] mt-[40px]">
      <img
        tw="absolute top-[100px] lg:left-[60px] left-[0px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationLeft2"
        src={decorationLeft2}
      />
      <img
        tw="absolute lg:top-[300px] md:top-[500px] sm:top-[290px] top-[220px] right-[0px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationRight1"
        src={decorationRight}
      />
      <img
        tw="absolute mix-blend-multiply xl:bottom-[-70px] lg:bottom-[-130px] md:bottom-[-90px] sm:bottom-[-80px] bottom-[-50px] right-[0px] lg:w-[480px] md:w-[380px] sm:w-[300px] w-[180px]"
        alt="blueTree"
        src={blueTree}
      />

      <div tw="relative container mx-auto">
        <div tw="lg:grid lg:grid-cols-3 items-start lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
          <div tw="lg:col-span-1 flex items-center mt-3">
            <img alt="metamask" src={RectangleBlue} />
            <div tw="font-quattrocento xl:text-[30px] md:text-[26px] sm:text-[21px] text-[16px] font-bold text-[#2B393E] uppercase ml-2.5">
              About
            </div>
          </div>
          <div tw="col-span-2 lg:mt-0 md:mt-[20px] mt-[10px]">
            <div tw="font-unbounded_earth font-normal xl:text-[38px] md:text-[30px] sm:text-[24px] text-[19px] text-[#121D1F] uppercase">
              Have <span tw="text-gray-50/40">fun and grow</span> in our virtual
              world
            </div>
            <div tw="font-quattrocento text-gray-50/50 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[15px] lg:mt-[24px] md:mt-[20px] sm:mt-[17px] mt-[14px]">
              Unbounded.Earth is a Cardano-blockchain-based metagalaxy operated
              by a team which aims to espouse Cardano core values while creating
              a fun and engaging metaverse game. At its core, U.E is a
              voxel-style game made in the Unity Engine. The team values
              integrity, honesty, and kindness, while developing a metagalaxy
              designed for the community, knowing much of the content will
              ultimately be made by the community. Thus, gameplay will feature
              something for everyone; U.E will have player versus player,
              storylines with role playing games, and even opportunities to
              create innovative new businesses the likes of which we’ve never
              seen on privately owned virtual land. Come have fun, learn, grow,
              and move in our virtual world!
            </div>
          </div>
        </div>
        {/* <div tw="lg:mt-[80px] md:mt-[30px] sm:mt-[20px] mt-[10px] font-quattrocento text-gray-50/50 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[15px] lg:leading-[60px] md:leading-[50px] sm:leading-[30px] leading-[25px] lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
          <span tw="">
            Unbounded.Earth is a Cardano-blockchain-based metagalaxy operated by
            a team which aims to espouse Cardano core values while creating a
            fun and engaging metaverse game. At its core, U.E is a voxel-style
            game made in the Unity Engine. The team values integrity, honesty,
            and kindness, while developing a metagalaxy designed for the
            community, knowing much of the content will ultimately be made by
            the community. Thus, gameplay will feature something for everyone;
            U.E will have player versus player, storylines with role playing
            games, and even opportunities to create innovative new businesses
            the likes of which we’ve never seen on privately owned virtual land.
            Come have fun, learn, grow, and move in our virtual world!
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default About;
