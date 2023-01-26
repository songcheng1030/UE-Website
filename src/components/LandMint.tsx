import tw, { styled } from "twin.macro";
import { useState, useEffect } from "react";
import RectangleBlue from "../assets/images/Rectangle-blue.png";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationRight from "../assets/images/decoration-right.png";
import decorationTree from "../assets/images/decoration-tree.png";
import bubbles from "../assets/images/bubbles.png";
import comming from "../assets/images/comingsoon.png";
import iMark from "../assets/images/i-mark.png";
import mark1 from "../assets/images/mark1.png";
import mark2 from "../assets/images/mark2.png";
import cancelGreen from "../assets/images/green/cancel-green.png";
import popupPic from "../assets/images/popup-pic.png";
import { useMediaQuery } from "react-responsive";

const LandMint = () => {
  // const onMetaMask = async() =>{
  //   const result = await connectWallet();
  //   if (result) {
  //     if ( result.status === STATUS_SUCCESS){
  //       showNotification('Wallet Connected. Ready to sign.');
  //     }
  //     else showNotification(result.message, 'error');
  //   }
  // }
  const isXSmall = useMediaQuery({ query: "(max-width: 370px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 330px)" });
  const [showLearnMore, setLearnMore] = useState(false);

  const setPopup = (flag: any) => {
    setLearnMore(flag);
    if (flag) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    } else {
      document.body.style.overflow = "scroll";
      return () => (document.body.style.overflow = "unset");
    }
  };

  return (
    <div tw="relative">
      <img
        tw="absolute top-[24px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationLeft"
        src={decorationLeft}
      />
      <img
        tw="absolute lg:top-[500px] md:top-[380px] sm:top-[280px] top-[200px] right-[0px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationRight"
        src={decorationRight}
      />
      <img
        tw="absolute mix-blend-multiply xl:top-[360px] lg:top-[250px] md:top-[220px] sm:top-[240px] top-[180px] xl:w-[380px] lg:w-[320px] md:w-[200px] sm:w-[170px] w-[140px]"
        alt="decorationTree"
        src={decorationTree}
      />
      {/* <img
        tw="absolute xl:top-[840px] lg:top-[640px] md:top-[500px] sm:top-[400px] top-[300px] lg:left-[140px] md:left-[100px] sm:left-[70px] left-[50px] lg:w-[87px] md:w-[50px] w-[30px]"
        alt="decorationTree"
        src={iMark}
      /> */}

      <div tw="relative container mx-auto">
        <div tw="lg:grid lg:grid-cols-3 items-start lg:mt-[70px] md:mt-[60px] sm:mt-[50px] mt-[40px] lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
          <div tw="lg:col-span-1 flex items-center mt-3">
            <img alt="metamask" src={RectangleBlue} />
            <div tw="font-quattrocento xl:text-[30px] md:text-[26px] sm:text-[21px] text-[16px] font-bold text-[#2B393E] uppercase ml-2.5">
              Land Mint
            </div>
          </div>
          <div
            tw="lg:col-span-2 lg:mt-0 md:mt-[20px] mt-[10px] font-unbounded_earth font-normal xl:text-[38px] md:text-[30px] sm:text-[24px] text-[19px] text-[#121D1F] uppercase"
            css={[isXSmall && tw` text-[15px]`]}
          >
            UNBOUNDED.EARTH's FIRST LAND MINT SOLD OUT IN JAN 2022, but{" "}
            <span tw="text-gray-50/40">future</span>
            <br></br>
            <span tw="text-gray-50/40">opportunities</span> await to <br></br>
            mint directly through us!
          </div>
        </div>
        <div tw="relative flex justify-center lg:mt-[100px] md:mt-[60px] sm:mt-[40px] mt-[20px]">
          <img
            alt="landMain"
            src={bubbles}
            tw="2xl:w-[800px] lg:w-[600px] md:w-[500px] sm:w-[350px] w-[300px]"
          />
          <img
            tw="absolute 2xl:top-[0px] xl:top-[0px] lg:top-[-20px] md:top-[-30px] top-[-30px] 2xl:right-[120px] xl:right-[90px] lg:right-[0px] md:right-[-20px] sm:right-[0px] right-[0px] lg:w-[150px] md:w-[130px] sm:w-[110px] w-[100px]"
            css={[isXSmall && tw`w-[70px]`]}
            alt="comming"
            src={comming}
          />
        </div>
        <div tw="lg:justify-center grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 lg:mt-[100px] md:mt-[60px] sm:mt-[40px] mt-[20px] lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
          <div tw="lg:col-start-2 sm:col-start-1 col-span-1">
            <img
              alt="mark1"
              src={mark1}
              tw="lg:w-[50px] md:w-[40px] sm:w-[30px] w-[20px]"
            />
            <div tw="font-quattrocento xl:text-lg lg:text-[17px] md:text-[16px] text-[14px] font-normal text-gray-100/60 mt-3">
              Each individual plot of land is 26x26 meters, with 16x16 meters of
              buildable space and 5 meters of roads on all sides.<br></br>When
              connected plots sit in the same wallet, roads can be replaced with
              extra buildable space!<br></br>That means estates (which are a
              total of 9 plots in a 3x3 pattern) are 78x78 meters wide including
              the roads and have 68x68 meters of buildable space! <br></br>{" "}
              <div
                tw="cursor-pointer hover:text-blue-400"
                onClick={() => {
                  setPopup(true);
                }}
              >
                <i>Learn more here!</i>
              </div>
            </div>
          </div>
          <div tw="lg:col-start-3 sm:col-start-2 col-span-1">
            <img
              alt="mark2"
              src={mark2}
              tw="lg:w-[40px] md:w-[30px] sm:w-[25px] w-[16px]"
            />
            <div tw="font-quattrocento xl:text-lg lg:text-[17px] md:text-[16px] text-[14px] font-normal text-gray-100/60 mt-3">
              All of the 1st land mint plots are SOLD OUT! We are watching the
              market for the right time to release the 2nd & 3rd land mints.
              <br></br>The only way to buy U.E land currently is from private
              sellers on secondary marketplaces. Stay involved in our community,
              particularly by following our Twitch channel and participating in
              our Discord server, to make sure you don’t miss the next land
              mints!
            </div>
          </div>
        </div>
      </div>

      {showLearnMore && (
        <div
          tw="fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-[500]"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            css={[
              tw`lg:w-[650px] md:w-[550px] sm:w-[450px] w-[350px] lg:h-[650px] md:h-[430px] sm:h-[380px] h-[350px] bg-white rounded-[10px] flex-col items-center relative lg:p-[20px] md:p-[15px] sm:p-[12px] p-[11px]`,
              isXSmall && tw`w-[320px] h-[320px]`,
              is2XSmall && tw`w-[280px] h-[280px]`,
            ]}
          >
            <img src={popupPic} alt="popup" tw="w-full h-full" />
            <img
              tw="lg:w-[17px] md:w-[15px] sm:w-[13px] w-[11px] lg:h-[17px] md:h-[15px] sm:h-[13px] h-[11px] absolute md:top-7 md:right-7 top-5 right-5 cursor-pointer"
              src={cancelGreen}
              alt="closeImg"
              onClick={() => {
                setPopup(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandMint;
