import tw, { styled } from "twin.macro";
import { useState, useEffect } from "react";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationRight from "../assets/images/decoration-right.png";
import decorationTree from "../assets/images/decoration-tree.png";
import faqImg from "../assets/images/faq.png";
import faq from "../constants/faq.json";
import arrowDown from "../assets/images/arrow-down.png";
import arrowUp from "../assets/images/arrow-up.png";
import cancelGreen from "../assets/images/green/cancel-green.png";
import popupPic from "../assets/images/popup-pic.png";
import { cloneDeep } from "lodash";
import { useMediaQuery } from "react-responsive";

const StyledPage = styled.div`
  ${tw`w-full bg-[#DAE7EB] xl:pt-[100px] lg:pt-[80px] md:pt-[70px] sm:pt-[60px] pt-[50px]`}
  background-size: cover;
`;

const Banner = styled.div`
  ${tw`w-full h-[400px]`}
  background: url(${faqImg});
  background-repeat: no-repeat;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const FaqPage = () => {
  const [faqOpenFlag, setFaqOpenFlag] = useState<boolean[]>([]);

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

  useEffect(() => {
    setFaqOpenFlag(faq.map((el) => false));
  }, []);

  const onOpen = (index: any) => {
    faqOpenFlag[index] = !faqOpenFlag[index];
    const temp = cloneDeep(faqOpenFlag);
    setFaqOpenFlag(temp);
  };

  return (
    <StyledPage>
      <div tw="relative">
        <img
          tw="absolute top-[24px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
          alt="decorationLeft"
          src={decorationLeft}
        />
        <img
          tw="absolute top-[500px] right-[0px] lg:w-[200px] md:w-[160px] sm:w-[120px] w-[80px]"
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
              <div tw="mt-[120px] lg:text-[56px] md:text-[48px] sm:text-[40px] text-[34px] font-bold font-unbounded_earth text-[#DAE7EB] text-center">
                FAQ
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#FFFFFF] text-center mt-[12px]">
                Unbounded.Earth is vast, find help navigating here
              </div>
            </Banner>
          </div>
          <div tw="relative xl:px-[150px] lg:px-[110px] md:px-[60px] sm:px-[30px] px-[20px] mx-auto lg:mt-[100px] md:mt-[80px] sm:mt-[76px] mt-[40px]">
            {faq.map((item, index) => {
              return (
                <div
                  key={index}
                  tw="bg-[#C9D7DB] rounded-lg lg:p-[24px] md:p-[20px] sm:p-[16px] p-[12px] lg:mb-[20px] md:mb-[16px] sm:mb-[14px] mb-[12px] cursor-pointer"
                  onClick={() => onOpen(index)}
                >
                  <div tw="flex justify-between items-center">
                    <div tw="font-quattrocento font-bold lg:text-base md:text-[14px] sm:text-[13px] text-[10px] text-gray-50 uppercase">
                      {item.question}
                    </div>
                    <img
                      tw="lg:w-[30px] md:w-[26px] sm:w-[22px] w-[18px] lg:h-[30px] md:h-[26px] sm:h-[24px] h-[20px]"
                      alt="arrowDown"
                      src={faqOpenFlag[index] ? arrowDown : arrowUp}
                      // onClick={() => onOpen(index)}
                    />
                  </div>
                  {faqOpenFlag[index] && (
                    <div tw="text-[#768285] whitespace-pre-line lg:text-base md:text-[15px] sm:text-[14px] text-[12px] font-quattrocento lg:pt-[20px] md:pt-[18px] sm:pt-[16px] pt-[14px]">
                      <div>{item.answer}</div>
                      <a href={item.link} target="_blank" tw="text-blue-700">
                        {item.link}
                      </a>
                      {index === 3 && (
                        <div
                          tw="cursor-pointer hover:text-blue-400"
                          onClick={() => {
                            setPopup(true);
                          }}
                        >
                          <i>Learn more here!</i>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
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
    </StyledPage>
  );
};

export default FaqPage;
