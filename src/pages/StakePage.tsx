import tw, { styled } from "twin.macro";
import { useState, useEffect } from "react";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationRight from "../assets/images/decoration-right.png";
import decorationTree from "../assets/images/decoration-tree.png";
import faqImg from "../assets/images/faq.png";
import faq from "../constants/faq.json";
import { cloneDeep } from "lodash";
import RectangleBlue from "../assets/images/Rectangle-blue.png";

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

const StakePage = () => {
  const [faqOpenFlag, setFaqOpenFlag] = useState<boolean[]>([]);

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
                stake
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#FFFFFF] text-center mt-[12px]">
                Committed to participating in the Cardano blockchain
              </div>
            </Banner>
          </div>
          <div tw="relative xl:px-[150px] lg:px-[110px] md:px-[60px] sm:px-[30px] px-[20px] mx-auto lg:mt-[80px] md:mt-[60px] sm:mt-[50px] mt-[40px]">
            <div>
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#121D1F] uppercase">
                U.E Stake Pool Information
              </div>
              <div tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#000000] mt-[1.5vw] mb-[1.5vw] font-bold">
                We run a stake pool to support the ecosystem and as another way
                to reward our supporters: <br></br>
                <a
                  tw="font-quattrocento font-normal text-[#475556]"
                  href="https://pool.pm/"
                  target="_blank"
                >
                  Check live information on Pool.pm here!
                </a>
              </div>
              <div tw="lg:text-base sm:text-[14px] text-[12px]">
                <div tw="flex items-center mt-1">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    Ticker Name: UESP
                  </div>
                </div>
                <div tw="flex items-center mt-1">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    Pledge: 300k ADA
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    Margin: 2% - all of which goes back into project development
                  </div>
                </div>
                <div tw="flex items-center mt-1">
                  <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    Rewards for delegators! SEE BELOW!
                  </div>
                </div>
              </div>
            </div>
            <div tw="mt-[1.5vw]">
              <span tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#000000] font-bold">
                NOTE:{" "}
              </span>
              <span tw="font-quattrocento lg:text-base sm:text-[14px] text-[12px] font-normal text-[#475556]">
                {" "}
                If you are unfamiliar with the process of staking ADA,{" "}
                <a
                  href="https://medium.com/unbounded-earth-metaverse/so-you-bought-ada-now-you-need-to-stake-it-3996f54e1bfc"
                  target="_blank"
                >
                  please check out our article here
                </a>
                , watch a video online, or check out the “📚│education” text
                channel in our discord!
              </span>
            </div>
            <div tw="lg:mt-[80px] md:mt-[40px] sm:mt-[30px] mt-[20px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#121D1F] uppercase">
                Delegator Rewards
              </div>
              <div tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#000000] mt-[1.5vw] mb-[1.5vw] font-bold">
                To thank our community for supporting Unbounded.Earth by staking
                their ADA in UESP, we are rewarding our delegators with $EARTH
                token! If your ADA is delegated to our stake pool you will earn
                0.5 EARTH per 1 ADA!
              </div>            
            </div>
            <div>
              <div tw="font-quattrocento text-lg text-[#000000] mt-[3vw] mb-[1.5vw] font-bold">
                Instructions to Harvest Rewards:
              </div>
              <div tw="lg:text-base sm:text-[14px] text-[12px]">
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    Send exactly 3 ADA to this address:
                  </div>
                </div>
                <div tw="ml-[17px] break-all font-quattrocento font-normal">
                  addr1q8h00q0mr0z5te8xwpvxxhqpwkpexhemfh7jgmlm08ef9neaf2pfvlh7j5z58jrzsgq2mkkrt0zcmm246dddsxv4qrjqrnmqcw
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    The system checks if the sending address is part of the UESP
                    stake pool, and if this is true it calculates the amount of
                    $EARTH tokens to send back along with 1.5 ADA.
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    This example shows how many $EARTH tokens you would receive
                    based on the amount delegated:
                  </div>
                </div>
                <div tw="ml-[17px] whitespace-pre-line">
                  - Low stake - 1,000 ADA = 500 $EARTH tokens per EPOCH{" "}
                  <br></br>- Medium stake - 25,000 ADA = 12,500 $EARTH tokens
                  per EPOCH<br></br>- Large stake - 100,000 ADA = 50,000 $EARTH
                  tokens per EPOCH
                </div>
              </div>
            </div>
            <div>
              <div tw="font-quattrocento text-lg text-[#000000] mt-[3vw] mb-[1.5vw] font-bold">
                Additional Information:
              </div>
              <div tw="lg:text-base sm:text-[14px] text-[12px]">
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    Currently the system does accrue your balance per epoch and
                    in future you will also be able to check how much has been
                    accrued!
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    The ratio of $EARTH/ADA will be adjusted as the stakepool
                    size changes. The ratio listed is based on the current
                    stakepool size.
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    If the sending address is not delegated to the UESP pool
                    then the system will automatically refund the 3 ADA (minus
                    min tx fees) to the sending address.
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    If the amount received in the System address is more or less
                    than 3 ADA a refund will also be issued to the sender (minus
                    min tx fees).
                  </div>
                </div>
                <div tw="flex mt-1">
                  <div tw="mr-2 lg:mt-[8px] sm:mt-[5px] mt-[4px] w-[8px] h-[8px]">
                    <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                  </div>
                  <div tw="font-quattrocento font-normal text-[#475556]">
                    If additional claims are made from the same address in a
                    single epoch then the system will also refund the 3 ADA to
                    the sending address (minus min tx fees).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledPage>
  );
};

export default StakePage;
