import tw, { styled } from "twin.macro";
import { useState, useEffect } from "react";
import RectangleBlue from "../assets/images/Rectangle-blue.png";
import decorationLeft2 from "../assets/images/decorationLeft2.png";
import decorationRight3 from "../assets/images/decorationRight3.png";
import decorationTree from "../assets/images/decoration-tree.png";
import cardanoMark from "../assets/images/CollabIcons/metaplanes_full_logo.png";
import solanaMark from "../assets/images/CollabIcons/cardastacks_w_name.png";
import intermetaMark from "../assets/images/CollabIcons/intermeta.png";
import metajetMark from "../assets/images/CollabIcons/Metajet.png";
import spacePugsMark from "../assets/images/CollabIcons/space_pugs.jpg";
import dddMark from "../assets/images/CollabIcons/DDC.jpg";
import { useMediaQuery } from "react-responsive";

const Collaborations = () => {
  const isXSmall = useMediaQuery({ query: "(max-width: 320px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 290px)" });
  const is1CustomMQ = useMediaQuery({ query: "(max-width: 530px)" });
  const is2CustomMQ = useMediaQuery({ query: "(max-width: 470px)" });
  const is3CustomMQ = useMediaQuery({ query: "(max-width: 430px)" });
  const is4CustomMQ = useMediaQuery({ query: "(max-width: 380px)" });
  const is5CustomMQ = useMediaQuery({ query: "(max-width: 340px)" });

  return (
    <div tw="relative lg:mt-[100px] md:mt-[80px] sm:mt-[60px] mt-[50px]">
      <img
        tw="absolute top-[100px] left-[60px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationLeft2"
        src={decorationLeft2}
      />
      <img
        tw="absolute lg:top-[500px] md:top-[450px] sm:top-[400px] top-[330px] right-[0px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationRight3"
        src={decorationRight3}
      />
      <img
        tw="absolute mix-blend-multiply xl:top-[360px] lg:top-[470px] md:top-[570px] sm:top-[620px] top-[450px] xl:w-[420px] lg:w-[380px] md:w-[300px] w-[200px]"
        css={[is1CustomMQ && tw`top-[500px]`, is2CustomMQ&& tw`top-[600px]`, is3CustomMQ&& tw`top-[670px]`, is4CustomMQ&& tw`top-[800px]`, is5CustomMQ&& tw`top-[850px]`]}
        alt="decorationTree"
        src={decorationTree}
      />

      <div tw="relative container mx-auto">
        <div tw="lg:grid lg:grid-cols-3 items-start lg:mt-[60px] md:mt-[40px] sm:mt-[30px] mt-[20px] lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
          <div tw="lg:col-span-1 flex items-center mt-3">
            <img alt="metamask" src={RectangleBlue} />
            <div tw="font-quattrocento xl:text-[30px] md:text-[26px] sm:text-[21px] text-[16px] font-bold text-[#2B393E] uppercase ml-2.5">
              Collaborations
            </div>
          </div>
          <div
            tw="lg:col-span-2 lg:mt-0 md:mt-[20px] mt-[10px] font-unbounded_earth font-normal xl:text-[38px] md:text-[30px] sm:text-[24px] text-[19px] text-[#121D1F] uppercase"
            css={[isXSmall && tw`text-[17px]`, is2XSmall && tw`text-[15px]`]}
          >
            UNBOUNDED.EARTH IS A{" "}
            <span tw="text-gray-50/40">
              CARDANO-BLOCKCHAIN-BASED METAGALAXY
            </span>
            , WHICH AIMS TO ESPOUSE CARDANO VALUES
          </div>
        </div>
        <div tw="lg:justify-center grid lg:grid-cols-3 lg:gap-4 lg:mt-[100px] mt-[0px] lg:pb-[80px] md:pb-[40px] sm:pb-[20px] pb-[10px] lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
          <div tw="lg:col-start-2">
            <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] font-normal text-gray-400/50 mt-3">
              Would you like to soar through the air with a jetpack?<br></br>
              What about charter a plane to visit each of the different islands?
              <br></br>Unbounded.Earth desires to support other Cardano
              blockchain projects with interoperable utility in the metaverse
              space. As such, we are collaborating with several projects, and
              we’re always making new connections. Beyond creating quality
              in-game content and assets for our users, we want to make the game
              more enjoyable for users by enabling them to use other NFTs with
              metaverse utility that they own in our game!
            </div>
          </div>
          <div tw="lg:col-start-3">
            <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] font-normal text-gray-400/50 mt-3">
              Businesses are encouraged to reach out to team@unbounded.earth so
              we can discuss collaborations, sponsorships, and a variety of
              bespoke metaverse services!<br></br>Unbounded.Earth is prepared to
              offer advertising space, custom geography, and assistance
              coordinating gamified content for your brand - your killer app in
              the metaverse - just to mention a few ways we can help your
              business make the transition to Web3. Come build in our voxel
              metagalaxy! Move with Us and change the way the world sees the
              emerging metaverse industry!
            </div>
          </div>
        </div>
        <div tw="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 md:gap-[30px] gap-[20px] sm:mt-0 mt-[50px]">
          <a
            tw="flex flex-col justify-between bg-[#C9D7DB] rounded-lg lg:mb-[80px] p-[24px] cursor-pointer shadow-xl transition duration-500 hover:scale-[1.03]"
            href="https://twitter.com/metaplanesnft"
            target="_blank"          
          >
            <div tw="flex items-center">
              <img alt="metamask" src={RectangleBlue} />
              <div tw="font-quattrocento lg:text-2xl md:text-[20px] sm:text-[16px] text-[12px] font-bold text-[#2B393E] uppercase ml-2.5 mt-1">
                Metaplanes
              </div>
            </div>
            <div tw="flex justify-center">
              <img
                alt="cardanoMark"
                src={cardanoMark}
                tw="lg:w-[230px] md:w-[200px] sm:w-[150px] w-[100px]"
              />
            </div>
            <div tw="font-quattrocento sm:text-base text-[13px] text-[#768285]">
              Metaplanes G1.5 is a special collection of planes featuring
              various cardano projects. These collaboration planes are made to
              show the strength and unity between projects on Cardano.
            </div>
          </a>
          <a
            tw="flex flex-col justify-between bg-[#C9D7DB] rounded-lg lg:mt-[80px] p-[24px] cursor-pointer shadow-xl transition duration-500 hover:scale-[1.03]"
            href="https://www.cardastacks.com/"
            target="_blank"          
          >
            <div tw="flex items-center">
              <img alt="metamask" src={RectangleBlue} />
              <div tw="font-quattrocento lg:text-2xl md:text-[20px] sm:text-[16px] text-[12px] font-bold text-[#2B393E] uppercase ml-2.5 mt-1">
                Cardastacks
              </div>
            </div>
            <div tw="flex justify-center">
              <img
                alt="cardanoMark"
                src={solanaMark}
                tw="lg:w-[230px] md:w-[200px] sm:w-[150px] w-[100px]"
              />
            </div>
            <div tw="font-quattrocento sm:text-base text-[13px] text-[#768285]">
              CardaStacks is a 3D immersive virtual space easily accessible
              straight from your browser. We are building Cardano’s first
              vertical residential and commercial space all incorporated into
              our luxury skyscraper known as ‘MetaView Tower’. The first of many
              buildings to be developed in our dense cityscape.
            </div>
          </a>
          <a
            tw="flex flex-col justify-between bg-[#C9D7DB] rounded-lg lg:mb-[80px] p-[24px] cursor-pointer shadow-xl transition duration-500 hover:scale-[1.03]"
            href="https://intermeta.global/"
            target="_blank"           
          >
            <div tw="flex items-center">
              <img alt="metamask" src={RectangleBlue} />
              <div tw="font-quattrocento lg:text-2xl md:text-[20px] sm:text-[16px] text-[12px] font-bold text-[#2B393E] uppercase ml-2.5 mt-1">
                Intermeta
              </div>
            </div>
            <div tw="flex justify-center">
              <img
                alt="cardanoMark"
                src={intermetaMark}
                tw="lg:w-[230px] md:w-[200px] sm:w-[150px] w-[100px]"
              />
            </div>
            <div tw="font-quattrocento sm:text-base text-[13px] text-[#768285]">
              We are developing a decentralized interoperability platform that
              empowers developers and users.
            </div>
          </a>
          <a
            tw="flex flex-col justify-between bg-[#C9D7DB] rounded-lg lg:mt-[80px] p-[24px] cursor-pointer shadow-xl transition duration-500 hover:scale-[1.03]"
            href="https://twitter.com/metajetcardano"
            target="_blank"          
          >
            <div tw="flex items-center">
              <img alt="metamask" src={RectangleBlue} />
              <div tw="font-quattrocento lg:text-2xl md:text-[20px] sm:text-[16px] text-[12px] font-bold text-[#2B393E] uppercase ml-2.5 mt-1">
                Metajets
              </div>
            </div>
            <div tw="flex justify-center">
              <img
                alt="cardanoMark"
                src={metajetMark}
                tw="lg:w-[230px] md:w-[200px] sm:w-[150px] w-[100px]"
              />
            </div>
            <div tw="font-quattrocento sm:text-base text-[13px] text-[#768285]">
              Premier NFT jetpacks used to travel throughout the Cardano
              metaverse.
            </div>
          </a>
          <a
            tw="flex flex-col justify-between bg-[#C9D7DB] rounded-lg lg:mb-[80px] p-[24px] cursor-pointer shadow-xl transition duration-500 hover:scale-[1.03]"
            href="https://dotdotlabs.io/"
            target="_blank"          
          >
            <div tw="flex items-center">
              <img alt="metamask" src={RectangleBlue} />
              <div tw="font-quattrocento lg:text-2xl md:text-[20px] sm:text-[16px] text-[12px] font-bold text-[#2B393E] uppercase ml-2.5 mt-1">
                DotDotLabs
              </div>
            </div>
            <div tw="flex justify-center">
              <img
                alt="cardanoMark"
                src={dddMark}
                tw="lg:w-[230px] md:w-[200px] sm:w-[150px] w-[100px]"
              />
            </div>
            <div tw="font-quattrocento sm:text-base text-[13px] text-[#768285]">
              Dot Dot Labs (DDL) is the parent company of the DOT DOT brand. Our
              goal is to ensure that your experience in every aspect of each
              project is heightened and elevated. We provide holistic support
              through our various projects while focusing on branding, art and
              partnerships.
            </div>
          </a>
          <a
            tw="flex flex-col justify-between bg-[#C9D7DB] rounded-lg lg:mt-[80px] p-[24px] cursor-pointer shadow-xl transition duration-500 hover:scale-[1.03]"
            href="https://spacepugsalpha.com/"
            target="_blank"          
          >
            <div tw="flex items-center">
              <img alt="metamask" src={RectangleBlue} />
              <div tw="font-quattrocento lg:text-2xl md:text-[20px] sm:text-[16px] text-[12px] font-bold text-[#2B393E] uppercase ml-2.5 mt-1">
                SpacePugs
              </div>
            </div>
            <div tw="flex justify-center">
              <img
                alt="cardanoMark"
                src={spacePugsMark}
                tw="xl:w-[230px] lg:w-[180px] md:w-[200px] sm:w-[150px] w-[100px]"
              />
            </div>
            <div tw="font-quattrocento sm:text-base text-[13px] text-[#768285]">
              Space Pugs is a passive income NFT project built on the Cardano
              Blockchain.
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
