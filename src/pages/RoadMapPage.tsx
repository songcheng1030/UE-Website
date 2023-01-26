import tw, { styled } from "twin.macro";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationRight from "../assets/images/decoration-right.png";
import decorationTree from "../assets/images/decoration-tree.png";
import loadmapImg from "../assets/images/roadmap.png";
import mapstep from "../constants/roadmap.json";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import cancelGreen from "../assets/images/green/cancel-green.png";
import checkGreen from "../assets/images/green/check-green.png";

const StyledPage = styled.div`
  ${tw`w-full bg-[#DAE7EB] xl:pt-[100px] lg:pt-[80px] md:pt-[70px] sm:pt-[60px] pt-[50px]`}
  background-size: cover;
`;

const Banner = styled.div`
  ${tw`w-full h-[400px]`}
  background: url(${loadmapImg});
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const CardStyle = styled.div((index: any) => ({
  marginLeft: `${index === 0 ? "500px" : "30px"}`,
  width: "100%",
  height: "262px",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  backgroundSize: "cover",
}));

const RoadMapPage = () => {
  const [step, setStep] = useState({ step: "", description: "" });
  const [showDescription, setShowDescription] = useState(false);
  const setPopup = (flag: any) => {
    setShowDescription(flag);
    if (flag) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    } else {
      document.body.style.overflow = "scroll";
      return () => (document.body.style.overflow = "unset");
    }
  };
  return (
    <StyledPage>
      <div tw="relative">
        <img
          tw="absolute top-[24px]"
          alt="decorationLeft"
          src={decorationLeft}
        />
        <img
          tw="absolute top-[500px] right-[0px] lg:w-[200px] md:w-[180px] sm:w-[150px] w-[100px]"
          alt="decorationRight"
          src={decorationRight}
        />
        <img
          tw="absolute mix-blend-multiply bottom-[0px] xl:w-[300px] lg:w-[250px] w-[0px]"
          alt="decorationTree"
          src={decorationTree}
        />
        <div tw="relative xl:pb-[380px] lg:pb-[340px] md:pb-[300px] sm:pb-[270px] pb-[240px]">
          <div tw="mt-[40px] xl:px-[150px] lg:px-[110px] md:px-[60px] w-full mx-auto flex justify-center items-center">
            <Banner>
              <div tw="mt-[100px] lg:text-[56px] md:text-[46px] sm:text-[40px] text-[34px] font-bold font-unbounded_earth text-[#DAE7EB] text-center">
                Unbounded.<br tw="sm:hidden"></br>Earth<br></br>RoadMap
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#FFFFFF] text-center mt-[12px]">
              Metagalactic Milestones
              </div>
            </Banner>
          </div>
          <div tw="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[40px] md:gap-[32px] sm:gap-[26px] gap-[20px] xl:px-[150px] lg:px-[110px] md:px-[60px] sm:px-[30px] px-[20px] mx-auto lg:mt-[130px] md:mt-[70px] sm:mt-[60px] mt-[40px]">
            {mapstep.map((item, index) => {
              return (
                <div
                  key={index}
                  tw="bg-[#C9D7DB] rounded-lg lg:p-[32px] md:p-[28px] sm:p-[24px] p-[20px] lg:text-base sm:text-[14px] text-[12px]"
                >
                  {item.status ? (
                    <div tw="flex justify-between">
                      <div tw="font-quattrocento lg:w-[48px] sm:w-[40px] w-[32px] lg:h-[48px] sm:h-[40px] h-[32px] bg-[#175E74] text-[#DAE7EB] font-bold rounded-lg text-center flex justify-center items-center">
                        {item.step}
                      </div>
                      <div>
                        <img
                          src={checkGreen}
                          alt="nft plot"
                          tw="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div tw="font-quattrocento lg:w-[48px] sm:w-[40px] w-[32px] lg:h-[48px] sm:h-[40px] h-[32px] bg-[#BAC9CE] text-gray-50 font-bold rounded-lg text-center flex justify-center items-center">
                      {item.step}
                    </div>
                  )}
                  <div tw="font-quattrocento text-gray-50 font-bold mt-4">
                    {item.text}
                  </div>
                  <div tw="font-quattrocento text-[#768285] mt-4">
                    {item.title}
                  </div>
                  <div
                    css={[
                      tw`text-center cursor-pointer text-base text-yellow-600 mt-[20px]`,
                    ]}
                    onClick={() => {
                      setPopup(true);
                      setStep({
                        step: item.step,
                        description: item.description,
                      });
                    }}
                  >
                    Description
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {showDescription && (
          <div
            tw="fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-[50]"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              css={[
                tw`md:w-[600px] sm:w-[500px] w-[320px] md:h-[400px] sm:h-[350px] h-[320px] bg-[#C9D7DB] rounded-[10px] flex-col items-center relative`,
                step.step === "06" &&
                  tw`lg:h-[490px] md:h-[470px] sm:h-[400px] h-[400px]`,
                  step.step ==="08" && tw`md:h-[400px] sm:h-[350px] h-[340px]`
              ]}
            >
              <div tw="lg:p-[33px] md:p-[26px] sm:p-[24px] p-[13px] lg:mt-[10px] md:mt-[8px] sm:mt-[5px] mt-[5px]">
                <div
                  tw="whitespace-pre-line font-quattrocento mt-10 text-gray-50 md:text-base sm:text-[14px] text-[13px] md:leading-7 sm:leading-6 overflow-auto lg:h-[400px]"
                  css={[step.step === "06" && tw`break-all`]}
                >
                  {step.description}
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
    </StyledPage>
  );
};

export default RoadMapPage;
