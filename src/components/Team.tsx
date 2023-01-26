import tw from "twin.macro";
import RectangleBlue from "../assets/images/Rectangle-blue.png";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationRight from "../assets/images/decoration-right.png";
import blueTree from "../assets/images/blue-tree2.png";
import twitter from "../assets/images/icons/twitter.png";
// import telegram from "../assets/images/telegram.svg";
// import linkedin from "../assets/images/linkedin.svg";
import cancelGreen from "../assets/images/green/cancel-green.png";
import teams from "../constants/team.json";
import otherTeams from "../constants/otherteam.json";
import { useMediaQuery } from "react-responsive";
import { useState, useRef } from "react";
import { onWheel, disableScroll, enableScroll } from "../utils/scroll";
import prev from "../assets/images/icons/prev-icon.png";
import next from "../assets/images/icons/next-icon.png";

let pos = { top: 0, left: 0, x: 0, y: 0 };

const Team = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1023px)" });
  const isPad = useMediaQuery({ query: "(max-width: 1023px)" });
  const isXSmall = useMediaQuery({ query: "(max-width: 370px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 320px)" });
  const [showBio, setShowBio] = useState(false);
  const [member, setMember] = useState({ name: "", bio: "" });

  const setPopup = (flag: any) => {
    setShowBio(flag);
    if (flag) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    } else {
      document.body.style.overflow = "scroll";
      return () => (document.body.style.overflow = "unset");
    }
  };

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const mouseDownHandler = (e: any) => {
    const container = scrollRef.current;
    if (container != undefined) {
      container.style.cursor = "grabbing";
      container.style.userSelect = "none";
      pos = {
        left: container.scrollLeft,
        top: container.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };
    }
    console.log('document:', document);
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = (e: any) => {
    console.log('mouseMoveHandler!')
    const container = scrollRef.current;
    const dx = e.clientX - pos.x;
    if (container != undefined) {
      container.scrollLeft = pos.left - dx;
    }
  };

  const mouseUpHandler = () => {
    console.log('mouseUpHandler')
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
    const container = scrollRef.current;
    if (container != undefined) {
      container.style.cursor = "grab";
      container.style.removeProperty("user-select");
    }
  };

  const movePrev = () => {
    const container = scrollRef.current;
    const dx = 50;
    if (container != undefined) {
      container.scrollLeft -= dx;
    }
  };

  const moveNext = () => {
    const container = scrollRef.current;
    const dx = 50;
    if (container != undefined) {
      container.scrollLeft += dx;
    }
  };

  return (
    <div
      id="team"
      tw="relative lg:mt-[200px] md:mt-[60px] sm:mt-[57px] mt-[50px]"
    >
      <img tw="absolute top-[24px]" alt="decorationLeft" src={decorationLeft} />
      <img
        tw="absolute top-[300px] right-[0px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationRight1"
        src={decorationRight}
      />
      <img
        tw="absolute mix-blend-multiply bottom-[0px] right-[0px] lg:w-[550px] md:w-[400px] sm:w-[310px] w-[220px]"
        alt="blueTree"
        src={blueTree}
      />
      <div tw="relative container mx-auto lg:pb-[150px] md:pb-[50px] sm:pb-[40px] pb-[40px]">
        <div tw="lg:grid lg:grid-cols-3 items-start lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
          <div tw="lg:col-span-1 flex items-center mt-3">
            <img alt="metamask" src={RectangleBlue} />
            <div tw="font-quattrocento xl:text-[30px] md:text-[26px] sm:text-[21px] text-[16px] font-bold text-[#2B393E] uppercase ml-2.5">
              Team
            </div>
          </div>
          <div tw="col-span-2 lg:mt-0 md:mt-[20px] mt-[10px]">
            <div tw="font-unbounded_earth font-normal xl:text-[38px] md:text-[30px] sm:text-[24px] text-[19px] text-[#121D1F] uppercase">
              GET TO KNOW <br></br>OUR <span tw="text-gray-50/40">GREAT TEAM</span>
            </div>
            <div tw="font-quattrocento text-gray-50/50 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[15px] lg:mt-[24px] md:mt-[20px] sm:mt-[17px] mt-[14px]">
              We are a small group of individuals passionate about Crypto and
              especially passionate about the Cardano Blockchain and the project
              as a whole. We hope to add value to the Cardano ecosystem and
              build something special that is totally Community driven
            </div>
          </div>
        </div>
        <div tw="lg:mt-[80px] md:mt-[40px] sm:mt-[20px] mt-[10px]">
          <div tw="grid lg:grid-cols-3 grid-cols-1 lg:gap-[40px] md:gap-[30px] gap-[20px]">
            {teams.map((item, index) => {
              return (
                <div
                  key={index}
                  tw="bg-[#C9D7DB] rounded-lg p-4 shadow-xl transition duration-500 hover:scale-[1.03]"
                >
                  {isDesktopOrLaptop && (
                    <>
                      <div tw="pt-4 flex justify-center bg-[#C1CFD3] rounded-lg lg:h-[250px] md:h-[200px] sm:h-[150px] h-[100px] mb-4">
                        <img
                          alt="member"
                          src={
                            require(`../assets/images/teams/${item.image}`)
                              .default
                          }
                        />
                      </div>
                      <div tw="font-quattrocento text-gray-50 uppercase text-xl font-bold">
                        {item.name}
                      </div>
                      <div tw="flex justify-between mt-2">
                        <div tw="font-quattrocento bg-[#C1CFD3] py-[8px] px-[16px] rounded-lg">
                          {item.id}
                        </div>
                        <div tw="flex">
                          <div tw="bg-[#C1CFD3] py-[10px] px-[10px] rounded-lg mr-2">
                            <a target="_blank" href={item.link}>
                              <img alt="metamask" src={twitter} />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        tw="text-center cursor-pointer text-base text-yellow-600 mt-[20px]"
                        onClick={() => {
                          setPopup(true);
                          setMember({ name: item.name, bio: item.text });
                        }}
                      >
                        View Bio
                      </div>
                    </>
                  )}
                  {isPad && (
                    <>
                      <div tw="flex gap-[20px]">
                        <div>
                          <div tw="pt-4 flex justify-center bg-[#C1CFD3] rounded-lg md:w-[150px] sm:w-[110px] w-[60px] md:h-[150px] sm:h-[110px] h-[60px]">
                            <img
                              alt="metamask"
                              src={
                                require(`../assets/images/teams/${item.image}`)
                                  .default
                              }
                            />
                          </div>
                          <div tw="font-quattrocento text-gray-50 uppercase text-center md:text-[18px] sm:text-[16px] text-[12px] font-bold mt-[5px]">
                            {item.name}
                          </div>
                        </div>
                        <div tw="flex justify-center items-center font-quattrocento text-[#768285] md:text-[18px] sm:text-[16px] text-[14px]">
                          <div tw="whitespace-pre-line md:h-[100px] sm:h-[90px] h-[80px] overflow-hidden">
                            {item.text}
                          </div>
                        </div>
                      </div>
                      <div tw="flex justify-between relative">
                        <div tw="font-quattrocento bg-[#C1CFD3] md:text-[16px] sm:text-[14px] text-[12px] py-[4px] px-[10px] rounded-lg flex justify-center items-center">
                          {item.id}
                        </div>
                        <div
                          tw="absolute md:left-[300px] sm:left-[230px] left-[150px] flex items-center space-x-2 cursor-pointer"
                          css={[
                            isXSmall && tw`left-[110px]`,
                            is2XSmall && tw`left-[105px]`,
                          ]}
                          onClick={() => {
                            setPopup(true);
                            setMember({ name: item.name, bio: item.text });
                          }}
                        >
                          <div
                            aria-hidden="true"
                            tw="flex md:h-10 h-8 md:w-10 w-8 rounded-full border border-yellow-200"
                            css={[is2XSmall && tw`hidden`]}
                          >
                            <svg
                              aria-hidden="true"
                              width="24"
                              height="24"
                              fill="none"
                              tw="my-auto mx-auto flex-none text-yellow-700"
                            >
                              <path
                                d="M10.75 8.75l3.5 3.25-3.5 3.25"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <span
                            tw="text-yellow-600 sm:text-[14px] text-[13px]"
                            css={[is2XSmall && tw`mt-[5px]`]}
                          >
                            Read more
                          </span>
                        </div>
                        <div tw="flex">
                          <a
                            href={item.link}
                            target="_blank"
                            tw="bg-[#C1CFD3] py-[10px] px-[10px] rounded-lg mr-2"
                          >
                            <img alt="metamask" src={twitter} />
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div tw="flex md:mx-[10px] sm:mx-[7px] mx-[4px]">
          <div
            tw="lg:mt-[85px] md:mt-[65px] sm:mt-[50px] mt-[50px] z-50 cursor-pointer"
            onClick={movePrev}
          >
            <img src={prev} alt="prev" tw="w-[50px]" />
          </div>
          <div
            ref={scrollRef}
            // onWheel={(e) => {
            //   onWheel(e, scrollRef);
            // }}
            // onMouseEnter={disableScroll}
            // onMouseLeave={enableScroll}
            onMouseDown={(e) => {
              mouseDownHandler(e);
            }}
            tw="flex justify-between overflow-x-auto lg:gap-[30px] md:gap-[40px] sm:gap-[30px] gap-[20px] scrollbar-hide lg:mt-[40px] md:mt-[20px] mt-[10px] lg:px-[10px] md:px-[7px] px-[3px] mx-[5px] cursor-pointer"
          >
            {otherTeams.map((item, index) => {
              return (
                <div
                  key={index}
                  tw="flex-shrink-0 lg:w-[250px] md:w-[200px] sm:w-[170px] w-[150px] py-[12px] "
                >
                  {index % 2 === 0 ? (
                    <div tw="relative lg:h-[120px] md:h-[100px] sm:h-[80px] h-[75px] bg-[#C9D7DB] rounded-lg lg:rotate-5 md:rotate-3 sm:rotate-2 rotate-1 lg:p-[20px] md:p-[15px] p-[10px]">
                      <div tw="font-quattrocento text-gray-50 uppercase lg:text-base md:text-[14px] sm:text-[13px] text-[12px] font-bold">
                        {item.name}
                      </div>
                      <div
                        tw="absolute md:bottom-[10px] sm:bottom-[6px] bottom-[3px] font-quattrocento text-gray-50 lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] bg-[#DAE7EB] rounded-lg lg:p-2.5 md:p-1.5 p-1 w-max"
                        onClick={() => {}}
                      >
                        {item.job}
                      </div>
                    </div>
                  ) : (
                    <div tw="relative lg:h-[120px] md:h-[100px] sm:h-[80px] h-[75px] bg-[#C9D7DB] rounded-lg lg:rotate-[-5deg] md:rotate-[-3deg] sm:rotate-[-2deg] rotate-[-1deg] lg:p-[20px] md:p-[15px] p-[10px]">
                      <div tw="font-quattrocento text-gray-50 uppercase lg:text-base md:text-[14px] sm:text-[13px] text-[12px] font-bold">
                        {item.name}
                      </div>
                      <div tw="absolute md:bottom-[10px] sm:bottom-[6px] bottom-[3px] font-quattrocento text-gray-50 lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] bg-[#DAE7EB] rounded-lg lg:p-2.5 md:p-1.5 p-1 w-max">
                        {item.job}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div
            tw="lg:mt-[85px] md:mt-[65px] sm:mt-[50px] mt-[50px] z-50 cursor-pointer"
            onClick={moveNext}
          >
            <img src={next} alt="next" tw="w-[50px]" />
          </div>
        </div>
      </div>
      {showBio && (
        <div
          tw="fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-[50]"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            css={[
              tw`md:w-[550px] sm:w-[450px] w-[350px] md:h-[430px] sm:h-[380px] h-[350px] bg-[#C9D7DB] rounded-[10px] flex-col items-center relative`,
            ]}
          >
            <div tw="lg:p-[30px] md:p-[26px] sm:p-[24px] p-[13px] lg:mt-[10px] md:mt-[8px] sm:mt-[5px] mt-[5px]">
              <div tw="text-center font-quattrocento mt-2 text-black md:text-lg sm:text-[16px] text-[15px] font-bold">
                {member.name}
              </div>
              <div tw="whitespace-pre-line font-quattrocento mt-4 text-gray-50 md:text-base sm:text-[14px] text-[13px] md:leading-7 sm:leading-6  md:h-[300px] sm:h-[280px] h-[260px] overflow-auto">
                {member.bio}
              </div>
            </div>
            <img
              tw="lg:w-[20px] md:w-[17px] sm:w-[14px] w-[12px] lg:h-[20px] md:h-[17px] sm:h-[14px] h-[12px] absolute top-5 right-5 cursor-pointer"
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

export default Team;
