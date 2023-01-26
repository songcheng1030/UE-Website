import tw, { styled } from "twin.macro";
import RectangleBlue from "../assets/images/Rectangle-blue.png";
import decorationLeft from "../assets/images/decoration-left.png";
import collectionsBack from "../assets/images/collectionsBack.png";
import decorationRight2 from "../assets/images/decorationRight2.png";
import clickHere from "../assets/images/icons/clickhere2.png";
import { collection1, collection2 } from "../constants/collection.json";
import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

let pos = { top: 0, left: 0, x: 0, y: 0 };

const Collections = () => {
  const [collectionID, setID] = useState(0);
  const [collection1ID, setCollection1ID] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isPad = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmall = useMediaQuery({ query: "(min-width: 640px)" });
  const isXSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 330px)" });
  const is3XSmall = useMediaQuery({ query: "(max-width: 290px)" });

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
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = (e: any) => {
    const container = scrollRef.current;
    const dx = e.clientX - pos.x;
    if (container) {
      container.scrollLeft = pos.left - dx;
    }
  };

  const mouseUpHandler = () => {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
    const container = scrollRef.current;
    if (container) {
      container.style.cursor = "grab";
      container.style.removeProperty("user-select");
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
        tw="absolute lg:top-[500px] md:top-[450px] sm:top-[400px] top-[330px] right-[0px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
        alt="decorationRight2"
        src={decorationRight2}
      />

      <div tw="relative container mx-auto">
        <div tw="lg:grid lg:grid-cols-3 items-start lg:mt-[140px] md:mt-[70px] sm:mt-[60px] mt-[50px] lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
          <div tw="lg:col-span-1 flex items-center mt-3">
            <img alt="metamask" src={RectangleBlue} />
            <div tw="font-quattrocento xl:text-[30px] md:text-[26px] sm:text-[21px] text-[16px] font-bold text-[#2B393E] uppercase ml-2.5">
              Collections
            </div>
          </div>
          <div
            tw="lg:col-span-2 lg:mt-0 md:mt-[20px] mt-[10px] font-unbounded_earth font-normal xl:text-[38px] md:text-[30px] sm:text-[24px] text-[19px] text-[#121D1F] uppercase"
            css={[is2XSmall && tw` text-[17px]`, is3XSmall && tw`text-[15px]`]}
          >   
            U.E DEVELOPS <span tw="text-gray-50/40">NFTs THAT ARE UNBOUNDED</span>, JUST LIKE THE VIRTUAL WORLD WE’RE BUILDING
          </div>
        </div>
        <div tw="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-1 lg:mt-[60px] md:mt-[40px] sm:mt-[30px] mt-[20px] sm:ml-[0px] ml-[30px] ">
          <div tw="col-span-1 relative md:overflow-x-auto scrollbar-hide md:mr-[10px]">
            {collection1.map((item, index) => {
              return (
                <div key={index}>
                  {isXSmall && (
                    <div
                      css={[tw`absolute hover:scale-[1.05] w-[55px] h-[55px] cursor-pointer`]}
                      style={{
                        left: `${index * 40}px`,
                        zIndex: `${50 - index}`,
                      }}
                      onClick={() => {
                        setCollection1ID(index);
                      }}
                    >
                      <img
                        tw="w-full h-full"
                        alt="roundItem1"
                        src={
                          require(`../assets/images/collections/${item.image}`)
                            .default
                        }
                      />
                    </div>
                  )}
                  {isSmall && !isPad && (
                    <div
                      css={[tw`absolute hover:scale-[1.05] w-[60px] h-[60px] cursor-pointer`]}
                      style={{
                        left: `${index * 45}px`,
                        zIndex: `${50 - index}`,
                      }}
                      onClick={() => {
                        setCollection1ID(index);
                      }}
                    >
                      <img
                        tw="w-full h-full"
                        alt="roundItem1"
                        src={
                          require(`../assets/images/collections/${item.image}`)
                            .default
                        }
                      />
                    </div>
                  )}
                  {isPad && !isDesktopOrLaptop && (
                    <div
                      css={[tw`absolute hover:scale-[1.05] w-[75px] h-[75px] cursor-pointer`]}
                      style={{
                        left: `${index * 55}px`,
                        zIndex: `${50 - index}`,
                      }}
                      onClick={() => {
                        setCollection1ID(index);
                      }}
                    >
                      <img
                        tw="w-full h-full"
                        alt="roundItem1"
                        src={
                          require(`../assets/images/collections/${item.image}`)
                            .default
                        }
                      />
                    </div>
                  )}
                  {isDesktopOrLaptop && (
                    <div
                      css={[
                        tw`absolute hover:scale-[1.05] w-[100px] h-[100px] cursor-pointer`,
                      ]}
                      style={{
                        left: `${index * 75}px`,
                        zIndex: `${50 - index}`,
                      }}
                      onClick={() => {
                        setCollection1ID(index);
                      }}
                    >
                      <img
                        tw="w-full h-full"
                        alt="roundItem1"
                        src={
                          require(`../assets/images/collections/${item.image}`)
                            .default
                        }
                      />
                    </div>
                  )}
                </div>
              );
            })}
             <div
              css={[tw`absolute lg:w-[80px] lg:h-[80px] md:w-[50px] md:h-[50px] sm:w-[45px] sm:h-[45px] w-[45px] h-[45px] lg:left-[170px] md:left-[125px] sm:left-[100px] left-[90px] lg:mt-[22px] md:mt-[20px] mt-[10px]`]}     
            >
              <img
                tw=""
                alt="clickhere"
                src={clickHere}                
              />
            </div>
          </div>
          <div tw="md:hidden mt-[50px]"></div>
          <div tw="lg:col-span-2 md:col-span-2 col-span-1 lg:text-lg md:text-[16px] sm:text-[14px] text-[12px]">
            <div tw="font-quattrocento font-bold text-black mb-2">
              {collection1[collection1ID].header}
            </div>
            <div tw="font-quattrocento font-normal text-[#677377] whitespace-pre-line">
              <i>{collection1[collection1ID].firstline}</i>{collection1[collection1ID].text}
            </div>
          </div>
        </div>
        <div tw="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-1 lg:mt-[60px] md:mt-[40px] sm:mt-[30px] mt-[20px] sm:ml-[0px] ml-[30px] ">
          <div
            tw="col-span-1 relative md:overflow-x-auto scrollbar-hide md:mr-[10px]"
            ref={scrollRef}
            onMouseDown={(e) => {
              mouseDownHandler(e);
            }}
          >
            {collection2.map((item, index) => {
              return (
                <div key={index}>
                  {isXSmall && (
                    <div
                      css={[tw`absolute hover:scale-[1.05] w-[40px] h-[40px] cursor-pointer`]}
                      style={{
                        left: `${index * 37}px`,
                        zIndex: `${50 - index}`,
                      }}
                      onClick={() => {
                        setID(index);
                      }}
                    >
                      <img
                        tw="w-[40px] h-[40px]"
                        alt="roundItem1"
                        src={
                          require(`../assets/images/collections/${item.image}`)
                            .default
                        }
                      />
                    </div>
                  )}
                  {isSmall && !isPad && (
                    <div
                      css={[tw`absolute hover:scale-[1.05] w-[45px] h-[45px] cursor-pointer`]}
                      style={{
                        left: `${index * 40}px`,
                        zIndex: `${50 - index}`,
                      }}
                      onClick={() => {
                        setID(index);
                      }}
                    >
                      <img
                        tw="w-[45px] h-[45px]"
                        alt="roundItem1"
                        src={
                          require(`../assets/images/collections/${item.image}`)
                            .default
                        }
                      />
                    </div>
                  )}
                  {isPad && !isDesktopOrLaptop && (
                    <div
                      css={[tw`absolute hover:scale-[1.05] w-[50px] h-[50px] cursor-pointer`]}
                      style={{
                        left: `${index * 45}px`,
                        zIndex: `${50 - index}`,
                      }}
                      onClick={() => {
                        setID(index);
                      }}
                    >
                      <img
                        tw="w-[50px] h-[50px]"
                        alt="roundItem1"
                        src={
                          require(`../assets/images/collections/${item.image}`)
                            .default
                        }
                      />
                    </div>
                  )}
                  {isDesktopOrLaptop && (
                    <div
                      css={[
                        tw`absolute hover:scale-[1.05] w-[80px] h-[80px] cursor-pointer`,
                      ]}
                      style={{
                        left: `${index * 75}px`,
                        zIndex: `${50 - index}`,
                      }}
                      onClick={() => {
                        setID(index);
                      }}
                    >
                      <img
                        tw="w-[80px] h-[80px]"
                        alt="roundItem1"
                        src={
                          require(`../assets/images/collections/${item.image}`)
                            .default
                        }
                      />
                    </div>
                  )}
                </div>
              );
            })}
            <div
              css={[tw`absolute lg:w-[80px] lg:h-[80px] md:w-[50px] md:h-[50px] sm:w-[45px] sm:h-[45px] w-[45px] h-[45px] lg:left-[310px] md:left-[185px] sm:left-[165px] left-[150px] md:mt-[5px]`]}     
            >
              <img
                tw=""
                alt="clickhere"
                src={clickHere}                
              />
            </div>
          </div>
          <div tw="md:hidden mt-[40px]"></div>
          <div tw="lg:col-span-2 md:col-span-2 col-span-1 lg:text-lg md:text-[16px] sm:text-[14px] text-[12px]">
            <div tw="font-quattrocento font-bold text-black mb-2">
              {collection2[collectionID].header}
            </div>
            <div tw="font-quattrocento font-normal text-[#677377] whitespace-pre-line">
              <i>{collection2[collectionID].firstLine}</i>{collection2[collectionID].text}
            </div>
          </div>
        </div>
        <div>
          <img
            tw="w-full lg:mt-[60px] md:mt-[50px] sm:mt-[40px] mt-[20px]"
            alt="collectionsBack"
            src={collectionsBack}
          />
        </div>
      </div>
    </div>
  );
};

export default Collections;
