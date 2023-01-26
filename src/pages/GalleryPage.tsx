import tw, { styled } from "twin.macro";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationRight from "../assets/images/decoration-right.png";
import decorationTree from "../assets/images/decoration-tree.png";
import faqImg from "../assets/images/faq.png";
import gallery from "../constants/gallery.json";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
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

const CardStyle = styled.div((index: any) => ({
  marginLeft: `${index === 0 ? "500px" : "30px"}`,
  width: "100%",
  height: "262px",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  backgroundSize: "cover",
}));

const GalleryPage = () => {
  const mapgap = (index: any) => {
    const a = index;
    return "200px";
  };
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isSmall = useMediaQuery({ query: "(min-width: 640px)" });
  const isXSmall = useMediaQuery({ query: "(max-width: 500px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 400px)" });
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
                Gallery
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#FFFFFF] text-center mt-[12px]">
                For the Community, By the Community
              </div>
            </Banner>
          </div>
          <div tw="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[30px] md:gap-[26px] sm:gap-[22px] gap-[18px] xl:px-[150px] lg:px-[110px] md:px-[60px] sm:px-[30px] px-[20px] mx-auto lg:mt-[130px] md:mt-[70px] sm:mt-[60px] mt-[40px]">
            {gallery.map((item, index) => {
              return (
                <div
                  key={index}
                  tw="bg-[#C9D7DB] rounded-lg lg:p-[12px] md:p-[11px] sm:p-[10px] p-[8px] xl:h-[400px] lg:h-[250px] md:h-[300px] sm:h-[250px] h-[400px]"
                  css={[isXSmall && tw`h-[300px]`, is2XSmall && tw`h-[250px]`]}
                >
                  <img
                    src={
                      require(`../assets/images/gallery/${item.name}`).default
                    }
                    alt="gallery"
                    tw="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyledPage>
  );
};

export default GalleryPage;
