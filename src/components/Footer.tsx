import "twin.macro";
import twitter from "../assets/images/icons/twitter.svg";
import youtube from "../assets/images/icons/youtube.png";
import twitch from "../assets/images/icons/twitch.png";
import discord from "../assets/images/icons/discord.png";
import dotBlack from "../assets/images/Rectangle-black.png";

const Footer = () => {
  const settingList = [
    { name: "Buy", url: "/buy" },
    { name: "Stake", url: "/stake" },
    {
      name: "World Map Explorer",
      url: " https://explorer.unbounded.earth",
      type: "blank",
    },
    { name: "Roadmap", url: "/roadmap" },
    { name: "Litepaper/Earthpaper", url: "/litepaper" },
    { name: "FAQ", url: "/faq" },
    {
      name: "Play Web Demo",
      url: "https://play.unbounded.earth",
      type: "black",
    },
    // {name: 'Blog',url: '/blog'},
  ];
  const goLink = (url: string) => {
    window.location.href = url;
  };

  return (
    <footer tw="w-full absolute bottom-0 z-30 border-t-2 border-t-[#C6D8DD] pb-[40px]">
      <div tw="flex justify-center items-center mb-[2vw] mt-[4vw] flex-wrap mx-[10px]">
        {settingList.map((item, index) => {
          return (
            <div key={index} tw="flex justify-center items-center">
              <a
                tw="text-gray-50 lg:text-lg md:text-[16px] sm:text-[14px] text-[13px] uppercase font-quattrocento font-bold text-center cursor-pointer"
                href={item.url}
                target={item.type}
              >
                {item.name}
              </a>
              {item.name !== "Play Web Demo" && (
                <img
                  alt="dotWhite"
                  src={dotBlack}
                  tw="sm:w-[5px] sm:h-[5px] w-[4px] h-[4px] lg:mx-12 md:mx-6 sm:mx-5 mx-4"
                />
              )}
            </div>
          );
        })}
      </div>
      <div tw="lg:flex justify-center items-center mt-[0.7vw] gap-[80px]">
        <div tw="flex items-center justify-center lg:text-lg md:text-[16px] sm:text-[15px] text-[14px]">
          {/* <div tw="font-quattrocento text-[#878A94] underline cursor-pointer invisible">
            Copyright Notice
          </div> */}
          <div
            tw="font-quattrocento text-[#878A94] underline ml-[24px] cursor-pointer"
            onClick={() => goLink("/service_terms")}
          >
            Terms of Service
          </div>
          {/* <div tw="font-quattrocento text-[#878A94] underline ml-[24px] cursor-pointer invisible">
            Privacy Policy
          </div> */}
        </div>
        <div tw="flex justify-center items-center lg:mt-0 sm:mt-[20px] mt-[20px] lg:gap-5 sm:gap-10 gap-5">
          <a
            tw="bg-[#C1CFD3] p-[12px] rounded-lg cursor-pointer"
            target="_blank"
            href="https://discord.gg/unboundedearth"
          >
            <img
              alt="discord"
              tw="lg:w-[25px] sm:w-[20px] w-[15px] lg:h-[25px] sm:h-[20px] h-[15px]"
              src={discord}
            />
          </a>
          <a
            tw="bg-[#C1CFD3] p-[12px] rounded-lg cursor-pointer"
            target="_blank"
            href="https://twitter.com/Unbounded_Earth"
          >
            <img
              alt="twitter"
              tw="lg:w-[25px] sm:w-[20px] w-[15px] lg:h-[25px] sm:h-[20px] h-[15px]"
              src={twitter}
            />
          </a>
          <a
            tw="bg-[#C1CFD3] p-[12px] rounded-lg cursor-pointer"
            target="_blank"
            href="https://www.youtube.com/channel/UCHHdJsmdNPPOhkZteMCUnBw?sub_confirmation=1"
          >
            <img
              alt="youtube"
              tw="lg:w-[25px] sm:w-[20px] w-[15px] lg:h-[25px] sm:h-[20px] h-[15px]"
              src={youtube}
            />
          </a>
          <a
            tw="bg-[#C1CFD3] p-[12px] rounded-lg cursor-pointer"
            target="_blank"
            href="https://www.twitch.tv/unboundedearth"
          >
            <img
              alt="twitch"
              tw="lg:w-[25px] sm:w-[20px] w-[15px] lg:h-[25px] sm:h-[20px] h-[15px]"
              src={twitch}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
