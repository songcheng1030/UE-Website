import tw, { styled } from "twin.macro";
import { useState, useEffect } from "react";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationRight from "../assets/images/decoration-right.png";
import decorationTree from "../assets/images/decoration-tree.png";
import faqImg from "../assets/images/faq.png";
import faq from "../constants/faq.json";
import { cloneDeep } from "lodash";
import RectangleBlue from "../assets/images/Rectangle-blue.png";
import AlphaButton from "../assets/images/buy/AlphaButton.png";
import WeaponsButton from "../assets/images/buy/WeaponsButton.png";
import LandButton from "../assets/images/buy/LandButton.png";
import PolicyButton from "../assets/images/buy/PolicyButton.png";
import { useMediaQuery } from "react-responsive";
import {
  openPaymentWindow1,
  openPaymentWindow3,
  openPaymentWindow10,
  openPaymentWindow20,
} from "../utils/payment";
import { UEVersion, EVersion } from "../types";
import ClickableText from "../components/ClickableText";
import { Modal } from "antd";

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

const MintPage = () => {
  const [faqOpenFlag, setFaqOpenFlag] = useState<boolean[]>([]);
  const [version, setVersion] = useState<EVersion>(EVersion.SECOND);
  const [isShowNOPE, setIsShowNOPE] = useState<boolean>(false);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXSmall = useMediaQuery({ query: "(max-width: 510px)" });
  const is2XSmall = useMediaQuery({ query: "(max-width: 425px)" });
  const is3XSmall = useMediaQuery({ query: "(max-width: 390px)" });
  const is4XSmall = useMediaQuery({ query: "(max-width: 330px)" });

  useEffect(() => {
    setFaqOpenFlag(faq.map((el) => false));
  }, []);
  //
  const onOpen = (index: any) => {
    faqOpenFlag[index] = !faqOpenFlag[index];
    const temp = cloneDeep(faqOpenFlag);
    setFaqOpenFlag(temp);
  };

  useEffect(() => {
    // if (isShowNOPE && !isDesktop) {    
    //   document.body.style.overflow = "hidden";
    // }
    // else {
    //   document.body.style.overflow = "scroll";
    // }
  }, [isShowNOPE]);

  const onPuzzleWinner = () => {
    // alert("WINNER: The puzzle answer is... revolutionary");
    setIsWinner(true);
    setIsShowNOPE(true);
  };
  let paragraph0 =
    "Please confirm local territorial rules and regulations to ensure compliance before purchasing. Always verify policy IDs when shopping on secondary markets or from private sellers; our policy IDs can be found at the bottom of this page.";
  let title1 = "Alpha Access Tablet Mint";
  let paragraph11 = "Buy Alpha Access Tablet NFTs!";
  let paragraph12 = "Send EXACTLY 150₳ to the vending machine address:";
  let paragraph13 =
    "addr1v87hu7njeyw0j0a80dtdd80kxju7tljzrkpjhvxdsrtyevgsrj266";
  let paragraph14 =
    "You can purchase multiple NFTs in a single transaction if you wish! Just send the correct total ADA and you will receive the corresponding number of NFTs.";
  let paragraph141 = "Send 300 ADA ";
  let paragraph142 = " Receive 2 x Alpha Access Tablets";
  let paragraph143 = "Send 450 ADA ";
  let paragraph144 = " Receive 3 x Alpha Access Tablets";
  let paragraph145 = "Send 600 ADA ";
  let paragraph146 = " Receive 4 x Alpha Access Tablets";
  let paragraph15 =
    "If the amount received is not an exact multiple of 150 ADA, a refund will be issued to the sender (minus minimum transaction fees).";
  let paragraph16 =
    "Please allow 1-2 hours for your NFT to be delivered to your wallet.";
  let title2 = "Alpha Access Tablet Information";
  let paragraph21 = "Alpha Access NFT mint launched June 24th at 6 pm UTC:";
  let paragraph22 = "Grants Early Access to Game Alpha Testing";
  let paragraph23 = "Mint price is 150ADA";
  let paragraph24 = "Supply of 5,000";
  let paragraph25 = "$EARTH Distributions";
  let paragraph26 = "Early Access to Future Content";
  let paragraph27 = "Discounts in the U.E Ecosystem, Including on NFTs";
  let paragraph28 = "Season 1 Battle Pass";
  let paragraph29 = "AND MORE!!!";
  let paragraph221 = "4 Versions -";
  let title31 = "Buy Unbounded.";
  let title32 = "Weapons - Gladiator Genesis NFTs!";
  let paragraph3 =
    "Use the buttons below to mint Unbounded.Weapons - Gladiator Genesis NFTs! Prices will be discounted for a flash sale the first 3 days the weapons are on the market, and Alpha Access Tablet holders will always receive a discount (Alpha Access discount stacks on top of flash sale discount).";
  let title41 = "Unbounded.";
  let title42 = "Weapons - Gladiator Genesis - Information?";
  let paragraph411 =
    "At Unbounded.Earth we believe that fun, engaging gameplay should come first in any virtual world aspiring to develop a robust and sustainable economy. Who will engage with all of the content landholders develop if not players enjoying a diverse world ";
  let paragraph412 =
    "f games & activities? It is Unbounded.Earth’s responsibility as the creators and stewards of this metagalaxy to lead by example, drawing in big audiences with a big game. As such, we are developing an innovative gladiator style battle royale game in Unbounded.Earth! Gladiator Royale will take advantage of several NFT items which U.E will be distributing, starting with the Gladiator Genesis collection of Greco-Roman inspired weapons!";
  let paragraph42 =
    "Our first collection of Unbounded.Weapons - Gladiator Genesis - features 30 styles of weapons from 3 classes - Melee, Ranged, & Magical - with varying rarity and power level. Each weapon class has pros and cons in battle, so you may want to find the class that best suits your play style or you may want to make sure you have a powerful option in each class.";
  let title5 = "Land Parcel Information";
  let paragraph51 =
    "Unbounded.Earth Land Parcels are NFTs that grant ownership of plots of land in the Unbounded.Earth metagalaxy. ";
  let paragraph52 =
    "Land Parcels are minting in 3 phases totaling 100,000 Parcels. ";
  let paragraph53 = "The first phase of 39,000 is SOLD OUT!!! ";
  let paragraph54 =
    "Phases 2 & 3 will mint supplies of 31,000 and 30,000 Land Parcels respectively; timing on these mints will be determined by several market & community factors. Follow our socials and participate in our Discord community to stay up to date on development! In the meantime you can find plots from the first mint listed by private sellers on secondary marketplaces. ";
  let paragraph55 =
    "The first round of NFT Land Parcels sold included 39,000 total plots in two sizes, single 1-plot 1x1 parcels and 9-plot estates in a 3x3 square:";
  let paragraph511 = "30,000 - 1x1 Land Parcels";
  let paragraph512 = "1,000 - 3x3 Land Parcel Estates";
  let title6 = "U.E BLOCKCHAIN PRODUCT POLICY IDs:";
  let paragraph61 = "First Land Parcel Mint:";
  let paragraph62 = "$EARTH Token:";
  let paragraph63 = "Alpha Access Tablets:";
  let paragraph64 = "Unbounded.Weapons - Gladiator Genesis:";
  let paragraph65 = "Unbounded.";
  let paragraph66 = "Consumables - Pineapple Pizza:";
  let paragraph67 = "Decorations - Snow Globe:";

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
              <div tw="mt-[120px] lg:text-[56px] md:text-[48px] sm:text-[40px] text-[34px] font-bold font-unbounded_earth text-[#DAE7EB] text-center">
                BUY
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#FFFFFF] text-center mt-[12px]">
                Innovative products that are shaping the metaverse
              </div>
            </Banner>
          </div>
          <div tw="relative xl:px-[150px] lg:px-[110px] md:px-[60px] sm:px-[30px] px-[20px] mx-auto lg:mt-[100px] md:mt-[80px] sm:mt-[70px] mt-[50px]">
            <div tw="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[15px] text-[#000000] mt-[1.57vw]">
              <i>
                <ClickableText
                  text={paragraph0}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </i>
            </div>
            <div
              tw="flex overflow-x-auto scrollbar-hide lg:mt-[60px] md:mt-[40px] sm:mt-[30px] mt-[20px] lg:gap-[100px] md:gap-[70px] sm:gap-[50px] gap-[40px] py-2"
              css={[isXSmall && tw`gap-[30px]`, is2XSmall && tw`gap-[20px]`]}
            >
              <a
                tw="flex-shrink-0 lg:w-[120px] md:w-[110px] sm:w-[100px] w-[80px] hover:scale-[1.1] transition duration-200"
                href="#tablet-mint"
              >
                <img src={AlphaButton} />
              </a>
              <a
                tw="flex-shrink-0 lg:w-[120px] md:w-[110px] sm:w-[100px] w-[80px] hover:scale-[1.1] transition duration-200"
                href="#gladiator"
              >
                <img src={WeaponsButton} />
              </a>
              <a
                tw="flex-shrink-0 lg:w-[120px] md:w-[110px] sm:w-[100px] w-[80px] hover:scale-[1.1] transition duration-200"
                href="#land-parcel"
              >
                <img src={LandButton} />
              </a>
              <a
                tw="flex-shrink-0 lg:w-[120px] md:w-[110px] sm:w-[100px] w-[80px] hover:scale-[1.1] transition duration-200"
                href="#policy-ids"
              >
                <img src={PolicyButton} />
              </a>
            </div>
            <div tw="lg:mt-[60px] md:mt-[40px] sm:mt-[30px] mt-[20px]">
              <div
                id="tablet-mint"
                tw="col-span-2 font-unbounded_earth font-normal lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#121D1F] uppercase"
              >
                <ClickableText text={title1} setIsShowNOPE={setIsShowNOPE} />
              </div>
              <div tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#000000] mt-[1.57vw] font-bold">
                Buy Alpha Access Tablet NFTs!
                <ClickableText
                  text={paragraph11}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="lg:text-lg md:text-base sm:text-[14px] text-[12px] font-quattrocento font-bold text-[#111111] mt-2">
                <ClickableText
                  text={paragraph12}
                  setIsShowNOPE={setIsShowNOPE}
                />
                <br />
                <i tw="break-all">
                  {" "}
                  <ClickableText
                    text={paragraph13}
                    setIsShowNOPE={setIsShowNOPE}
                  />
                </i>
              </div>
              <div tw="lg:text-base sm:text-[14px] text-[12px] font-quattrocento font-normal text-[#111111] mt-1">
                <ClickableText
                  text={paragraph14}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="lg:text-base sm:text-[14px] text-[12px] ml-4">
                <div tw="flex items-center">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph141}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                    &gt;
                    <ClickableText
                      text={paragraph141}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex items-center mt-1">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph143}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                    &gt;
                    <ClickableText
                      text={paragraph144}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex items-center mt-1">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph145}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                    &gt;
                    <ClickableText
                      text={paragraph146}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
              </div>
              <div tw="lg:text-base sm:text-[14px] text-[12px] font-quattrocento font-normal text-[#111111] mt-1">
                <ClickableText
                  text={paragraph15}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="lg:text-base sm:text-[14px] text-[12px] font-quattrocento font-normal text-[#111111] mt-1">
                <ClickableText
                  text={paragraph16}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
            </div>
            <div tw="lg:mt-[80px] md:mt-[40px] sm:mt-[30px] mt-[20px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#121D1F] uppercase">
                <ClickableText text={title2} setIsShowNOPE={setIsShowNOPE} />
              </div>
              <div tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#000000] mt-[1.5vw] mb-[20px] font-bold">
                <ClickableText
                  text={paragraph21}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="lg:text-base sm:text-[14px] text-[12px]">
                <div tw="flex items-center">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph22}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex items-center mt-1">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph23}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph24}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph221}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                    <div tw="ml-[20px]">
                      Diamond (250/5000) - 8 Weeks Early Access<br></br>Sapphire
                      (750/5000) - 6 Weeks Early Access<br></br>Emerald
                      (1500/5000) - 4 Weeks Early Access<br></br>Ruby
                      (2500/5000) - 2 Weeks Early Access
                    </div>
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph25}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph26}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph27}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph28}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph29}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  new section to be added newly*/}
            <div tw="lg:mt-[80px] md:mt-[40px] sm:mt-[30px] mt-[20px]">
              <div
                id="gladiator"
                tw="col-span-2 font-unbounded_earth font-normal lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#121D1F] uppercase"
              >
                <ClickableText text={title31} setIsShowNOPE={setIsShowNOPE} />
                {is2XSmall && <br></br>}
                <ClickableText text={title32} setIsShowNOPE={setIsShowNOPE} />
              </div>
              <div tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#000000] mt-[1.5vw] mb-[20px] font-bold">
                <ClickableText
                  text={paragraph3}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>

              <div tw="overflow-x-auto">
                <div
                  tw="overflow-x-auto relative shadow-md sm:rounded-lg xl:w-[1000px] lg:w-[800px] md:w-[680px] w-[580px] mx-auto"
                  className="group relative z-10"
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 h-full w-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105"
                  ></div>
                  {version === EVersion.FIRST && (
                    <table tw="w-full md:text-[14px] sm:text-[12px] text-[12px] text-center">
                      <thead tw="md:text-[14px] sm:text-[12px] text-[11px] text-black uppercase bg-[#A7B5B9] border-b border-white">
                        <tr>
                          <th
                            scope="col"
                            tw="py-5 px-6"
                            css={[is3XSmall && tw`px-[10px]`]}
                          >
                            Number of Weapons to Mint
                          </th>
                          <th
                            scope="col"
                            tw="py-5 px-6"
                            css={[is3XSmall && tw`px-[10px]`]}
                          >
                            List Price
                          </th>
                          <th
                            scope="col"
                            tw="py-5 px-6"
                            css={[is3XSmall && tw`px-[10px]`]}
                          >
                            Price w/ Alpha Access Tablet
                          </th>
                          <th
                            scope="col"
                            tw="py-5 px-6 md:w-[300px] w-[250px]"
                            css={[is3XSmall && tw`px-[10px]`]}
                          >
                            Click to BUY NOW!
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr tw="font-medium bg-[#A7B5B9] border-b border-white hover:bg-[#96A4A8]">
                          <th scope="row" tw="py-2 px-6 whitespace-nowrap">
                            1
                          </th>
                          <td tw="py-2 px-6">15₳</td>
                          <td tw="py-2 px-6">10₳</td>
                          <td tw="px-6 py-2">
                            <div tw="cursor-pointer">
                              <img
                                src="https://studio.nmkr.io/images/buttons/paybutton_1_3.svg"
                                onClick={openPaymentWindow1}
                                tw=""
                              />
                            </div>
                          </td>
                        </tr>
                        <tr tw="font-medium bg-[#A7B5B9] border-b border-white hover:bg-[#96A4A8]">
                          <th scope="row" tw="py-4 px-6 whitespace-nowrap">
                            3
                          </th>
                          <td tw="py-4 px-6">40₳</td>
                          <td tw="py-4 px-6">26.67₳</td>
                          <td tw="py-4 px-6">
                            <div tw="w-full h-full cursor-pointer">
                              <img
                                src="https://studio.nmkr.io/images/buttons/paybutton_1_3.svg"
                                onClick={openPaymentWindow3}
                                tw="w-full h-full"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr tw="font-medium bg-[#A7B5B9] border-b border-white hover:bg-[#96A4A8]">
                          <th scope="row" tw="py-4 px-6 whitespace-nowrap">
                            10
                          </th>
                          <td tw="py-4 px-6">130₳</td>
                          <td tw="py-4 px-6">86.67₳</td>
                          <td tw="py-4 px-6">
                            <div tw="w-full h-full cursor-pointer">
                              <img
                                src="https://studio.nmkr.io/images/buttons/paybutton_1_3.svg"
                                onClick={openPaymentWindow10}
                                tw="w-full h-full"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr tw="font-medium bg-[#A7B5B9] hover:bg-[#96A4A8]">
                          <th scope="row" tw="py-4 px-6 whitespace-nowrap">
                            20
                          </th>
                          <td tw="py-4 px-6">255₳</td>
                          <td tw="py-4 px-6">170₳</td>
                          <td tw="py-4 px-6">
                            <div tw="w-full h-full cursor-pointer">
                              <img
                                src="https://studio.nmkr.io/images/buttons/paybutton_1_3.svg"
                                onClick={openPaymentWindow20}
                                tw="w-full h-full"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                  {version === EVersion.SECOND && (
                    <table tw="w-full md:text-[14px] sm:text-[12px] text-[12px] text-center">
                      <thead tw="md:text-[14px] sm:text-[12px] text-[11px] text-black uppercase bg-[#A7B5B9] border-b border-white">
                        <tr>
                          <th
                            scope="col"
                            tw="py-5 px-6"
                            css={[is3XSmall && tw`px-[10px]`]}
                          >
                            Number of Weapons to Mint
                          </th>
                          <th
                            scope="col"
                            tw="py-5 px-6"
                            css={[is3XSmall && tw`px-[10px]`]}
                          >
                            List Price
                          </th>
                          <th
                            scope="col"
                            tw="py-5 px-6"
                            css={[is3XSmall && tw`px-[10px]`]}
                          >
                            Price w/ Alpha Access Tablet
                          </th>
                          <th
                            scope="col"
                            tw="py-5 px-6 md:w-[300px] w-[250px]"
                            css={[is3XSmall && tw`px-[10px]`]}
                          >
                            Click to BUY NOW!
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr tw="font-medium bg-[#A7B5B9] border-b border-white hover:bg-[#96A4A8]">
                          <th scope="row" tw="py-2 px-6 whitespace-nowrap">
                            1
                          </th>
                          <td tw="py-2 px-6">20₳</td>
                          <td tw="py-2 px-6">15₳</td>
                          <td tw="px-6 py-2">
                            <div tw="cursor-pointer">
                              <img
                                src="https://studio.nmkr.io/images/buttons/paybutton_1_3.svg"
                                onClick={openPaymentWindow1}
                                tw=""
                              />
                            </div>
                          </td>
                        </tr>
                        <tr tw="font-medium bg-[#A7B5B9] border-b border-white hover:bg-[#96A4A8]">
                          <th scope="row" tw="py-4 px-6 whitespace-nowrap">
                            3
                          </th>
                          <td tw="py-4 px-6">55₳</td>
                          <td tw="py-4 px-6">41.25₳</td>
                          <td tw="py-4 px-6">
                            <div tw="w-full h-full cursor-pointer">
                              <img
                                src="https://studio.nmkr.io/images/buttons/paybutton_1_3.svg"
                                onClick={openPaymentWindow3}
                                tw="w-full h-full"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr tw="font-medium bg-[#A7B5B9] border-b border-white hover:bg-[#96A4A8]">
                          <th scope="row" tw="py-4 px-6 whitespace-nowrap">
                            10
                          </th>
                          <td tw="py-4 px-6">180₳</td>
                          <td tw="py-4 px-6">135₳</td>
                          <td tw="py-4 px-6">
                            <div tw="w-full h-full cursor-pointer">
                              <img
                                src="https://studio.nmkr.io/images/buttons/paybutton_1_3.svg"
                                onClick={openPaymentWindow10}
                                tw="w-full h-full"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr tw="font-medium bg-[#A7B5B9] hover:bg-[#96A4A8]">
                          <th scope="row" tw="py-4 px-6 whitespace-nowrap">
                            20
                          </th>
                          <td tw="py-4 px-6">340₳</td>
                          <td tw="py-4 px-6">255₳</td>
                          <td tw="py-4 px-6">
                            <div tw="w-full h-full cursor-pointer">
                              <img
                                src="https://studio.nmkr.io/images/buttons/paybutton_1_3.svg"
                                onClick={openPaymentWindow20}
                                tw="w-full h-full"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>

            <div tw="lg:mt-[80px] md:mt-[40px] sm:mt-[30px] mt-[20px]">
              <div
                tw="col-span-2 font-unbounded_earth font-normal lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#121D1F] uppercase"
                css={[is4XSmall && tw`text-[22px]`]}
              >
                <ClickableText text={title41} setIsShowNOPE={setIsShowNOPE} />
                {is2XSmall && <br />}
                <ClickableText text={title42} setIsShowNOPE={setIsShowNOPE} />
              </div>
              <div
                css={[
                  !is2XSmall && tw`flex`,
                  tw`justify-between items-center lg:text-lg md:text-base sm:text-[15px] text-[14px] font-bold mt-[1.5vw] xl:mx-[400px] lg:mx-[130px] md:mx-[100px] sm:mx-[80px] mx-[50px] underline`,
                  isXSmall && tw`mx-[20px]`,
                ]}
              >
                <div css={[tw`text-center`, is2XSmall && tw`mt-[20px]`]}>
                  <a
                    href="/pdf/UWeapons-Gladiator_Genesis-Rarity_Chart.pdf"
                    target="_blank"
                  >
                    Click Here for Rarity Chart!
                  </a>
                </div>
                <div
                  css={[tw`text-center`, is2XSmall && tw`mt-[7px] mb-[15px]`]}
                >
                  <a
                    href="/pdf/UWeapons-Gladiator_Genesis-Level_Chart.pdf"
                    target="_blank"
                  >
                    Click Here for Level Chart!
                  </a>
                </div>
              </div>
              <div tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#000000] mt-[1.5vw] mb-[20px] font-bold">
                <ClickableText
                  text={paragraph411}
                  setIsShowNOPE={setIsShowNOPE}
                />
                <span onClick={onPuzzleWinner} tw="cursor-pointer">
                  o
                </span>
                <ClickableText
                  text={paragraph412}
                  setIsShowNOPE={setIsShowNOPE}
                />
                <br />
                <br />
                <ClickableText
                  text={paragraph42}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
            </div>

            {/*  */}
            <div tw="lg:mt-[80px] md:mt-[40px] sm:mt-[30px] mt-[20px]">
              <div
                id="land-parcel"
                tw="col-span-2 font-unbounded_earth font-normal lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#121D1F] uppercase"
              >
                <ClickableText text={title5} setIsShowNOPE={setIsShowNOPE} />
              </div>
              <div tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#000000] mt-[30px] font-bold">
                <ClickableText
                  text={paragraph51}
                  setIsShowNOPE={setIsShowNOPE}
                />{" "}
                <br></br>
                <ClickableText
                  text={paragraph52}
                  setIsShowNOPE={setIsShowNOPE}
                />{" "}
                <br></br>
                <ClickableText
                  text={paragraph53}
                  setIsShowNOPE={setIsShowNOPE}
                />{" "}
                <br></br>
                <ClickableText
                  text={paragraph54}
                  setIsShowNOPE={setIsShowNOPE}
                />{" "}
                <br></br>
                <ClickableText
                  text={paragraph55}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="lg:text-base sm:text-[14px] text-[12px]">
                <div tw="flex items-center mt-1">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph511}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
                <div tw="flex items-center mt-1">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    <ClickableText
                      text={paragraph512}
                      setIsShowNOPE={setIsShowNOPE}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div tw="lg:mt-[80px] md:mt-[40px] sm:mt-[30px] mt-[20px]">
              <div
                id="policy-ids"
                tw="col-span-2 font-unbounded_earth font-normal lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#121D1F] uppercase"
              >
                <ClickableText text={title6} setIsShowNOPE={setIsShowNOPE} />
              </div>
            </div>
            <div tw="lg:mt-[60px] md:mt-[40px] sm:mt-[25px] mt-[17px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[22px] md:text-[18px] sm:text-[17px] text-[15px] text-[#121D1F] uppercase">
                <ClickableText
                  text={paragraph61}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="break-all font-quattrocento lg:text-lg md:text-[16px] text-[14px] text-[#000000] mt-[1.6vw] font-bold">
                bb78d3b6638537d6df7ae43791ead3d50e75fdae82131eff2b7ae994
              </div>
            </div>
            <div tw="lg:mt-[60px] md:mt-[40px] sm:mt-[25px] mt-[17px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[22px] md:text-[18px] sm:text-[17px] text-[15px] text-[#121D1F] uppercase">
                <ClickableText
                  text={paragraph62}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="break-all font-quattrocento lg:text-lg md:text-[16px] text-[14px] text-[#000000] mt-[1.6vw] font-bold">
                984394dcc0b08ea12d72b8833292e3c3197d7a8ac89aad61d2f5aa9e
              </div>
            </div>
            <div tw="lg:mt-[60px] md:mt-[40px] sm:mt-[25px] mt-[17px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[22px] md:text-[18px] sm:text-[17px] text-[15px] text-[#121D1F] uppercase">
                <ClickableText
                  text={paragraph63}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="break-all font-quattrocento lg:text-lg md:text-[16px] text-[14px] text-[#000000] mt-[1.6vw] font-bold">
                2521b39414dacf3acef85cd1cb316ef092d94d6e53b3a9c98ea6a288
              </div>
            </div>
            <div tw="lg:mt-[60px] md:mt-[40px] sm:mt-[25px] mt-[17px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[22px] md:text-[18px] sm:text-[17px] text-[15px] text-[#121D1F] uppercase">
                <ClickableText
                  text={paragraph64}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="break-all font-quattrocento lg:text-lg md:text-[16px] text-[14px] text-[#000000] mt-[1.6vw] font-bold">
                44b84d95018f9898567a1017ca4d99f3247a18824136e45844ab6cb6
              </div>
            </div>
            <div tw="lg:mt-[60px] md:mt-[40px] sm:mt-[25px] mt-[17px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[22px] md:text-[18px] sm:text-[17px] text-[15px] text-[#121D1F] uppercase">
                <ClickableText
                  text={paragraph65}
                  setIsShowNOPE={setIsShowNOPE}
                />
                {is2XSmall && <br />}
                <ClickableText
                  text={paragraph66}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="break-all font-quattrocento lg:text-lg md:text-[16px] text-[14px] text-[#000000] mt-[1.6vw] font-bold">
                71a5cafc0827c0a84a8a9516cbea50d2bc4e1ccd7e33103756451e1d
              </div>
            </div>
            <div tw="lg:mt-[60px] md:mt-[40px] sm:mt-[25px] mt-[17px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[22px] md:text-[18px] sm:text-[17px] text-[15px] text-[#121D1F] uppercase">
                <ClickableText
                  text={paragraph65}
                  setIsShowNOPE={setIsShowNOPE}
                />
                {is2XSmall && <br />}
                <ClickableText
                  text={paragraph67}
                  setIsShowNOPE={setIsShowNOPE}
                />
              </div>
              <div tw="break-all font-quattrocento lg:text-lg md:text-[16px] text-[14px] text-[#000000] mt-[1.6vw] font-bold">
                3eb2769b2e600e10764e327835ebc5d5c2cc3c09a3b036830c0d370a
              </div>
            </div>
          </div>
        </div>
      </div>
      {!is3XSmall && (
        <Modal
          visible={isShowNOPE}
          onCancel={() => {
            setIsShowNOPE(false);
            setIsWinner(false);
          }}
          footer={null}
          width="380px"
          style={{ top: 200 }}
        >
          <div tw="text-[#DDDDDD] p-[20px]">
            <div tw="sm:text-lg text-base text-[#999999] font-semibold mt-[10px]">
              unbounded.earth says
            </div>
            <div tw="text-center mt-[30px] font-semibold sm:text-xl text-lg">
              {isWinner
                ? "WINNER: The puzzle answer is... revolutionary"
                : "NOPE!"}
            </div>
            <div
              tw="rounded-2xl mx-auto mt-[30px] sm:text-sm text-[12px] sm:w-[70px] w-[65px] sm:py-[2px] py-[1px] text-center border-[1px] border-[#999999] cursor-pointer hover:border-[#BBBBBB]"
              onClick={() => {
                setIsShowNOPE(false);
                setIsWinner(false);
              }}
            >
              Ok
            </div>
          </div>
        </Modal>
      )}
      {is3XSmall && (
        <Modal
          visible={isShowNOPE}
          onCancel={() => {
            setIsShowNOPE(false);
            setIsWinner(false);
          }}
          footer={null}
          width="280px"
          style={{ top: 200 }}
        >
          <div tw="text-[#DDDDDD] p-[20px]">
            <div tw="text-sm text-[#999999] font-semibold mt-[10px]">
              unbounded.earth says
            </div>
            <div tw="text-center mt-[20px] font-semibold text-base">
              {isWinner
                ? "WINNER: The puzzle answer is... revolutionary"
                : "NOPE!"}
            </div>
            <div
              tw="rounded-2xl mx-auto mt-[30px] text-[12px] w-[60px] py-[1px] text-center border-[1px] border-[#999999] cursor-pointer hover:border-[#BBBBBB]"
              onClick={() => {
                setIsShowNOPE(false);
                setIsWinner(false);
              }}
            >
              Ok
            </div>
          </div>
        </Modal>
      )}
    </StyledPage>
  );
};

export default MintPage;
