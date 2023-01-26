import tw, { styled } from "twin.macro";
import { useState } from "react";
import mainImage from "../assets/images/Main.png";
import line from "../assets/images/line.png";
import playBtn from "../assets/images/playBtn.png";
import nextBtn from "../assets/images/nextBtn.png";
import frame from "../assets/images/Frame.png";
import soundoff from "../assets/images/soundoff.png";
import arrowLeft from "../assets/images/arrowLeft.png";
import arrowRight from "../assets/images/arrowRight.png";
import { useMediaQuery } from "react-responsive";

const StyledPage = styled.div`
  ${tw`relative w-full bg-[#ffffff] xl:pt-[110px] lg:pt-[140px] md:pt-[170px] sm:pt-[200px] pt-[180px]`}
  height: 100vh;
  background: url(${mainImage});
  background-position: center;
  background-size: cover;
`;

const MainPage = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const goMapExplorer = () => {
    // window.location.href = 'https://explorer.unbounded.earth';
    window.open("https://explorer.unbounded.earth", "_blank");
  };
  const isXSmall = useMediaQuery({ query: "(max-width: 380px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 300px)" });

  return (
    <StyledPage>
      <div
        tw="text-center xl:text-[62px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[28px] font-unbounded_earth font-normal text-[#cd8e1b] uppercase"
        css={[isXSmall && tw` text-[26px]`, is2XSmall && tw`text-[24px]`]}
      >
        Welcome to
      </div>
      <div tw="flex justify-center">
        <img
          alt="metamask"
          src={line}
          tw="lg:w-[750px] md:w-[650px] sm:w-[500px] w-[300px]"
        />
      </div>
      <div
        tw="font-unbounded_earth font-normal text-[#cd8e1b] 2xl:text-[95px] xl:text-[90px] lg:text-[70px] md:text-[54px] sm:text-[44px] text-[38px] text-center uppercase"
        css={[isXSmall && tw` text-[32px]`]}
      >
        Unbounded.<br tw="sm:hidden"></br>Earth
      </div>
      <div tw="lg:flex justify-center items-center lg:mt-[0] md:mt-[50px] sm:mt-[70px] mt-[100px] invisible">
        <div tw="border-dashed p-2 flex items-center border-[1px] text-white/40 lg:w-[260px] w-[80%] h-[65px] rounded-full lg:mx-3 mx-auto cursor-pointer hover:bg-white/10">
          <img alt="metamask" src={playBtn} tw="w-[45px] h-[45px]" />
          <div tw="font-quattrocento lg:text-lg md:text-[17px] sm:text-[16px] text-[15px] text-center w-full font-bold text-white/80 uppercase">
            Watch Trailer
          </div>
        </div>
        <div tw="border-dashed p-2 flex items-center border-[1px] text-white/40 lg:w-[260px] w-[80%] h-[65px] rounded-full lg:mx-3 mx-auto cursor-pointer hover:bg-white/10 lg:mt-[0px] mt-[20px]">
          <img alt="metamask" src={nextBtn} tw="w-[45px] h-[45px]" />
          <div tw="font-quattrocento lg:text-lg md:text-[17px] sm:text-[16px] text-[15px] text-center w-full font-bold text-white/80 uppercase">
            Play now
          </div>
        </div>
      </div>
      <div tw="absolute bottom-[10px] w-full">
        <div tw="flex items-center justify-between mx-[20px]">
          {/* <div tw="flex items-center cursor-pointer invisible">
            {isSoundOn ? (
              <img alt="metamask" src={soundoff} />
            ) : (
              <img alt="metamask" src={frame} />
            )}
            <div
              tw="ml-4 font-quattrocento lg:text-lg md:text-[14px] sm:text-[12px] text-[10px] text-center w-full font-bold text-white/80 uppercase"
              onClick={() => setIsSoundOn(!isSoundOn)}
            >
              sound on
            </div>
          </div>
          <div tw="flex items-center invisible">
            <img tw="cursor-pointer" alt="metamask" src={arrowLeft} />
            <div tw="mx-3 mt-1 cursor-pointer font-quattrocento lg:text-lg md:text-[14px] sm:text-[12px] text-[10px] text-center w-full font-bold text-white/80 uppercase">
              FOREST
            </div>
            <img tw="cursor-pointer" alt="metamask" src={arrowRight} />
          </div> */}
          <a
            tw="flex items-center xl:w-[210px] xl:h-[210px] lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[110px] sm:h-[110px] w-[90px] h-[90px] rounded-full border-[1px] border-white/40 hover:bg-gray-500/10 cursor-pointer"
            css={[is2XSmall && tw`w-[70px] h-[65px]`]}
            href="https://play.unbounded.earth"
            target="_blank"     
          >
            <div tw="font-quattrocento lg:text-lg md:text-[14px] sm:text-[12px] text-[10px] text-center w-full font-bold text-white/80 uppercase">
              Play Web Demo
            </div>
          </a>
          <a
            tw="flex items-center xl:w-[210px] xl:h-[210px] lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] sm:w-[110px] sm:h-[110px] w-[90px] h-[90px] rounded-full border-[1px] border-white/40 hover:bg-gray-500/10 cursor-pointer"
            css={[is2XSmall && tw`w-[70px] h-[65px]`]}
            // onClick={goMapExplorer}
            href="https://explorer.unbounded.earth"           
          >
            <div tw="font-quattrocento lg:text-lg md:text-[14px] sm:text-[12px] text-[10px] text-center w-full font-bold text-white/80 uppercase">
              Map explorer
            </div>
          </a>
        </div>
      </div>
    </StyledPage>
  );
};

export default MainPage;
