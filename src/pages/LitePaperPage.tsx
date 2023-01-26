import tw, { styled } from "twin.macro";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationRight from "../assets/images/decoration-right.png";
import decorationTree from "../assets/images/decoration-tree.png";
import faqImg from "../assets/images/faq.png";
import nftplot from "../assets/images/litepaper/nft-plot.png";
import metaverse from "../assets/images/litepaper/metaverse.png";
import metaverse2 from "../assets/images/litepaper/metaverse2.png";
import tokenmark from "../assets/images/litepaper/token_mark.png";
import tokenomics from "../assets/images/litepaper/tokenomics.png";
import tokenomics2 from "../assets/images/litepaper/tokenomics2.png";
import RectangleBlue from "../assets/images/Rectangle-blue.png";
import team from "../assets/images/litepaper/team.png";
import roadmap from "../assets/images/litepaper/roadmap.png";

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

const LitePaperPage = () => {
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
              <div tw="mt-[120px] xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[26px] text-[24px] font-bold font-unbounded_earth text-[#DAE7EB] text-center">
                Unbounded.<br tw="sm:hidden"></br>Earth | Litepaper V1.0
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#FFFFFF] text-center mt-[12px]">
                Unbounded.Earth's vision is vast, start digging into the basics here
              </div>
            </Banner>
          </div>
          <div tw="relative xl:px-[150px] lg:px-[110px] md:px-[60px] sm:px-[30px] px-[20px] mx-auto lg:mt-[80px] md:mt-[60px] sm:mt-[50px] mt-[40px]">
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                Introduction
              </div>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    Metaverses are online worlds where humans can own land and
                    interact in a 3D reality with one another, be that
                    interaction for work, play, worship, or whatever else the
                    mind can imagine.
                  </div>
                  <div>
                    Unbounded.Earth is a Cardano blockchain based metaverse
                    project, which aims to espouse Cardano core values. It
                    values integrity, honesty and kindness, while seeking to
                    create a decentralized project for the community and by the
                    community. It will be developed in voxelized styling,
                    utilizing Unity game engine for development. Seasons will be
                    fixed to quadrants of the map within the game, inspiring
                    creativity for development of the land by its inhabitants.
                    U.E plans to offer an amazing and community oriented
                    metaverse, while simultaneously striving to address concerns
                    regarding the increased time humans will spend online as we
                    move to more virtual work and play environments.
                  </div>
                  <div>
                    The total proposed number of plots is 100,000 NFTs, which
                    will be sold as 1x1 and variable sized estates (eg 3x3,
                    4x4). These will be distributed over the course of three
                    mints. The first mint contained 39,000 plots, while mint two
                    and three will have 31,000 and 30,000 plots, respectively.
                  </div>
                  <div>
                    <img src={nftplot} alt="nft plot" tw="mt-[20px] w-full" />
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                The Metaverse: Potential Conundrum
              </div>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    Does the idea of people working in the metaverse make you
                    feel uncomfortable? Screen time and sedentary lifestyles
                    have been a growing concern for humans over the years with
                    the advent of computers, tablets and smartphones. Imagine
                    this issue being compounded as we move to a more virtual
                    world and even work within it? Some people
                  </div>
                  <div>
                    Since 1975, worldwide obesity has nearly tripled1 . In the
                    United States, a staggering 42.4% of the population was
                    obese in 2017-20182 . Clearly this is a problem that is not
                    going away and is increasing in severity.
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                Unbounded.Earth Proposed Solutions
              </div>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    U.E plans to address these concerns by implementing a new
                    strategy for in-game rewards coined Move to Earn (M2E). This
                    system will give in-game rewards to users who are actively
                    moving in the real world. We are currently researching &
                    developing innovative solutions for this global problem, and
                    we will keep the community updated as breakthroughs emerge.
                  </div>
                  <div>
                    As a companion to M2E, Unbounded.Earth is devoted to
                    encouraging the education of its members and society as a
                    whole, and plans to implement a Learn to Earn (L2E) reward
                    system as well in game. The combined benefits of L2E and M2E
                    features will help address concerns regarding a sedentary
                    lifestyle and metaverses. The full methodology for these
                    reward systems will be disclosed in upcoming versions of the
                    whitepaper, termed “Earthpaper”.
                  </div>
                  <div>
                    As a result of the Covid-19 pandemic, more and more people
                    have begun to work remotely; with this change in business
                    structure, there is also great opportunity for growth in
                    metaverses. More and more businesses are purchasing virtual
                    land, and opportunities within this space will continue to
                    expand.
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                Metaverse Market and Cardano Evolution
              </div>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    <img
                      src={metaverse}
                      alt="metaverse"
                      tw="float-left mr-[20px]"
                    />
                    Metaverses are already in the news in increasing frequency,
                    and even those not familiar with cryptocurrencies may still
                    be familiar with the term “metaverse”.<br></br>A metaverse
                    is a virtual world, where humans can work and play, own
                    land, and interact with one another. They may even create
                    whole businesses there, be they offering digital or physical
                    services and items. Many companies are embracing the
                    concept, with companies like Samsung hosting events already
                    in a metaverse.3<br></br>
                    Recent market research analysis by Bloomberg shows that
                    metaverses are the next big technology platform. It will
                    attract online game makers, social networks and other
                    technology leaders to compete for what is calculated to be a
                    nearly $800 billion market opportunity. This market may
                    reach $783.3 billion in 2024 vs. $478.7 billion in 2020
                    representing a compound annual growth rate of 13.1%, based
                    on the team’s analysis and Newzoo, IDC, PWC, Statista and
                    Two Circles data.4
                  </div>
                  <div tw="xl:mt-[120px] mt-[20px]">
                    <img
                      src={metaverse2}
                      alt="metaverse2"
                      tw="float-left mr-[20px]"
                    />
                    At the time of this litepaper’s first production, there were
                    currently 1,174,499 actively Cardano wallets delegated in
                    the blockchain. From the timeframe of December 2020 to
                    December 2021, the number of Cardano wallets increased by
                    1200%.5 The future is bright for Cardano based metaverse
                    projects due to investors coming from other blockchains
                    interested in CNFTs, $ADA coming from exchanges causing
                    exponential increase in Cardano wallets and the advent of
                    blockchain-backed companies like World Mobile, who aspire to
                    bring online connectivity to entire continents like Africa.
                    The opportunities for metaverses on the Cardano blockchain
                    can only continue to expand. There are clear advantages in
                    this space for an aggressive and innovative project to
                    thrive.
                  </div>
                </div>
              </div>
            </div>
            <div tw="2xl:mt-[170px] xl:mt-[100px] lg:mt-[70px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                Unbounded.Earth game
              </div>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    Much of the gameplay for the world has yet to be determined,
                    but U.E can share that which is hoped to be produced. These
                    concepts are all subject to change as more game development
                    occurs.
                  </div>
                  <div>
                    Avatars will be of voxel styling, like the rest of the game.
                    They will tire and be in need of rest and food, as well as
                    have the capability to be harmed. There will be many ways to
                    regenerate energy, one of which will be physical activity
                    outside of the game.
                  </div>
                  <div>
                    U.E strives to be as interoperable with other metaverses and
                    CNFT projects as possible and is seeking out collaborative
                    opportunities with other exceptional projects. This will
                    give investors more opportunity to have assets in the game
                    other than what is native to Unbounded.Earth. There will
                    also be in-game marketplaces from which to purchase items.
                  </div>
                  <div>
                    Community reserved spaces within the game include portals in
                    each season, community areas, beaches and water. These will
                    be used for public access & special in-game events and will
                    not be available for public purchase in the future.
                  </div>
                  <div>
                    Many people are also concerned about how they will build
                    upon their plots, which are 16 m by 16m for every 1 x 1. In
                    alignment with the goal to collaborate, U.E intends to allow
                    outside builds to be used on the plots, be they minted from
                    a collaborating project or specially made for the landowner.
                    However, in the spirit of inclusivity, it is also intended
                    for the game to have a free basic builder for all land
                    holders. Therefore, everyone will have the ability to have a
                    building on their land. There will be a height limit for
                    each plot, which will increase when adjacent plots are held
                    in the same wallet; estates will be able to build higher
                    than a single 1x1 plot. Additionally, the ability to build a
                    basement will be explored.
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                $EARTH Token
              </div>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    <img
                      src={tokenmark}
                      alt="metaverse"
                      tw="float-left mr-[20px] lg:w-[300px] md:w-[250px] sm:w-[300px] w-[200px] lg:h-[300px] md:h-[250px] sm:h-[300px] h-[200px]"
                    />
                    Many investors in cryptocurrency projects are keen to
                    understand the reward structure they will enjoy as a part of
                    a project. $EARTH is the token that will be utilized across
                    the Unbounded.Earth ecosystem, including in the game, for
                    future governance and for investor rewards.
                    <br></br>
                    <br></br>There will be a total supply of 3,316,000,000
                    $EARTH tokens. As homage to the Cardano blockchain, this
                    number was chosen by adding the birth years of Ada Lovelace
                    (1815) and Gerolamo Cardano (1501).
                    <br></br>
                    <br></br>
                    Pictured above is a view of the $EARTH token, shown in
                    partial rotation. $EARTH token is a gyroscope coin that is
                    interactive in nature, viewable in AR through pool.pm in its
                    full glory.
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                $EARTH Tokenomics
              </div>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div tw="mb-[10px] lg:text-[24px] md:text-xl sm:text-lg text-[16px] text-[#000000]">
                    How will the tokens be allocated?
                  </div>
                  <div>
                    <img
                      src={tokenomics}
                      alt="nft plot"
                      tw="mt-[20px] w-full"
                    />
                  </div>
                  <div tw="mt-[10px]">
                    Again, the total $EARTH token supply available at launch
                    will be 3,316,000,000. The $EARTH token supply will be
                    divided between community airdrops, development, founding
                    team, liquidity, utility and future hires. The full divide
                    of the supply is as follows: 30% for community airdrop, 20%
                    toward development, 20% to the founding team, 15% to
                    liquidity, 10% to utility and finally 5% for future hires.
                    We will outline briefly below some details what each
                    allocation will entail and benefit.
                  </div>
                  <div>
                    Community Airdrops - 30% or 994,800,000 of the total token
                    supply
                  </div>
                  <div>
                    Thirty percent of the total allocated tokens will be given
                    to plot holders in the form of $EARTH airdrops for every NFT
                    land parcel. This percentage will be divided among the three
                    planned mints of Unbounded.Earth on a sliding scale.
                  </div>
                  <div>
                    Those who own NFTs from the first mint, be it that they
                    minted them or purchased them on secondary markets, will
                    receive the largest distribution of 15% of the allocated
                    $EARTH tokens. A snapshot will be taken of the wallets
                    holding them (date TBA). This will result in 12,753.84
                    $EARTH per plot from the first mint. Plot holders, at the
                    time of the second airdrop snapshot, who mint or purchase
                    from the second mint will receive the next 10%; this will
                    result in 10,696.77 $EARTH per plot from the second mint.
                    Finally, the snapshot of those who mint or purchase from the
                    third mint will receive the least allocation at 5% of the
                    tokens; this will result in 5,526.66 $EARTH per plot from
                    the final mint. The second and third mint dates are still to
                    be announced, and the second mint will not occur before Q2
                    2022
                  </div>
                  <div>
                    <img
                      src={tokenomics2}
                      alt="nft plot"
                      tw="mt-[20px] w-full"
                    />
                  </div>
                  <div tw="mt-[10px]">
                    <span tw="underline">Development</span>-20% or 663,200,000
                    of the total token supply This portion of the tokenomics
                    will help with the development of the metaverse
                    infrastructure
                  </div>
                  <div tw="mt-[10px]">
                    <span tw="underline">Team</span>-20% or 663,200,000 of the
                    total token supply This distribution will be for the
                    founding team members. The team will be on a vesting
                    schedule, full details of which will be released in the
                    Earthpaper.
                  </div>
                  <div tw="mt-[10px]">
                    <span tw="underline">Liquidity</span> - 15% or 497,400,000
                    of the total token supply This is necessary to reserve in
                    order to provide liquidity for listing in exchanges.
                  </div>
                  <div tw="mt-[10px]">
                    <span tw="underline">Utility</span> – 10% or 331,600,000 of
                    the total token supply Reserved for future in-game and
                    stakepool rewards.
                  </div>
                  <div tw="mt-[10px]">
                    <span tw="underline">Future Hires</span> – 5% or 165,800,000
                    of the total token supply This is meant to be an incentive
                    to join the Unbounded.Earth team and a benefit for future
                    company employees.
                  </div>
                  <div tw="mt-[10px]">
                    Important Notice: Community Airdrop for plot/estate holders
                    will follow shortly after the completion of each
                    Unbounded.Earth mint sale. This is with the exception of
                    mint one, after which some time is needed to prepare $EARTH
                    and the implementation of a snapshot and airdrop
                    systemology. The $EARTH Tokens shall be airdropped for each
                    plot that the holder possesses in their ADA wallets soon
                    after the snapshot is taken.
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                Royalties and Other Rewards
              </div>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    Each Unbounded.Earth plot will have royalties applied (the
                    CIP-0027 | Standardization of royalties), and this will
                    apply to each sale in the secondary market that utilizes
                    this standard. Royalties from this will be deposited into a
                    community wallet, visible to the public. The manner and
                    frequency of the royalty withdrawal to benefactors has not
                    yet been decided.
                  </div>
                  <div tw="mt-[20px]">
                    The 6% royalty allocation will be as follows:
                    <div tw="ml-[10px] flex">
                      <div tw="lg:mt-[10px] sm:mt-[7px] mt-[5px] w-[8px] h-[8px]">
                        <img
                          tw="mr-2"
                          alt="RectangleBlue"
                          src={RectangleBlue}
                        />
                      </div>
                      <div tw="ml-2">
                        50% for infrastructure development and marketing.
                      </div>
                    </div>
                    <div tw="ml-[10px] flex relative">
                      <img
                        tw="mr-2 absolute lg:top-[10px] sm:top-[7px] top-[2px]"
                        alt="RectangleBlue"
                        src={RectangleBlue}
                      />
                      <div tw="ml-[15px]">
                        <div>
                          30% will be rewards for loyal plot and estate owners
                          and will be rewarded on a set schedule (TBA). This is
                          termed Own to Earn (O2E).
                        </div>
                        <div tw="ml-[10px] flex relative">
                          <img
                            tw="mr-2 absolute top-[10px]"
                            alt="RectangleBlue"
                            src={RectangleBlue}
                          />
                          <div tw="ml-[15px]">
                            <div>This 30% will be divided into two groups:</div>
                            <div tw="ml-[10px] flex">
                              <div tw="lg:mt-[10px] sm:mt-[7px] mt-[5px] w-[8px] h-[8px]">
                                <img
                                  tw="mr-2"
                                  alt="RectangleBlue"
                                  src={RectangleBlue}
                                />
                              </div>
                              <div tw="ml-2">
                                All plot owners are to be rewarded a portion of
                                this 30% (percentage TBD).
                              </div>
                            </div>
                            <div tw="ml-[10px] flex">
                              <div tw="lg:mt-[10px] sm:mt-[7px] mt-[5px] w-[8px] h-[8px]">
                                <img
                                  tw="mr-2"
                                  alt="RectangleBlue"
                                  src={RectangleBlue}
                                />
                              </div>
                              <div tw="ml-2">
                                The rest of the 30% will be distributed among 4
                                Season* holders. Owners of all 4 seasons will
                                receive additional quarterly rewards
                                proportional to the quantity of complete 4
                                Season sets held in their wallets (collections
                                must be complete within the same wallet to be
                                verified). The schedule for quarterly awards is
                                yet to be announced.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div tw="ml-[10px] flex">
                    <div tw="lg:mt-[10px] sm:mt-[7px] mt-[5px] w-[8px] h-[8px]">
                      <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                      </div>
                      <div tw="ml-2">
                        20% will be donated for charity to a crypto
                        art/education non-profit yet to be selected
                      </div>
                    </div>
                  </div>
                  <div tw="mt-[10px]">
                    Other reward structures are planned in-game to include Play
                    to Earn (P2E), Move to Earn (M2E) and Learn to Earn (L2E).
                    More information regarding these incentive structures will
                    be given in the future.
                  </div>
                  <div tw="mt-[10px]">
                    *Aside from receiving a percentage of the aforementioned
                    royalties on a set schedule, additional rewards for 4
                    Seasons holders in-game will be disclosed in the future.
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <a href='/#team' tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                Team
              </a>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    The core team currently consists of 5 individuals across the
                    globe. Unbounded.Earth is actively hiring for a variety of
                    positions, including social media/brand ambassadors, 3D
                    graphic designers, financial consultants, developers and
                    more. Recently, another seven individuals have been hired,
                    including developers, social media manager, and operations.<a tw="text-[#768285] text-[16px]" href='/#team'>{'< More >'}</a>
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <a href='/roadmap' tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                Roadmap
              </a>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    The original roadmap was created with the assumption that
                    the project would have slow and organic growth and would be
                    a bootstrapped/lean startup. Due to the first mint selling
                    out much faster than anticipated, the previous roadmap is
                    being fast tracked. See the image below for the updated
                    roadmap.<a tw="text-[#768285] text-[16px]" href='/roadmap'>{'< More >'}</a>
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                Conclusion
              </div>
              <div tw="font-quattrocento lg:text-xl md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  <div>
                    This is an exciting time to get involved with metaverses!
                    The world continues not only to come online and embrace new
                    technologies, but also to explore blockchain technologies
                    and their vast use-case concepts such as metaverses. As we
                    become increasingly involved with other humans virtually, we
                    will continue to encounter problems worth solving, such as
                    concerns of sedentary lifestyles or scarcity of information
                    in a fast-evolving technological landscape. As metaverses
                    are predicted to become a greater part of human life, both
                    for recreation and work, it will be extremely important to
                    address these concerns while simultaneously creating a
                    diverse and inclusive community. Unbounded.Earth proposes
                    several measures to combat these concerns, including Move to
                    Earn (M2E) and Learn to Earn (L2E) while also trying to
                    encourage an atmosphere of kindness and empathy within the
                    community. The project is driven by community participation
                    and offers a variety of rewards for participating in a
                    variety of ways. Excitement around this concept has led to
                    the first minting of land parcels selling out much faster
                    than anticipated, accelerating the development of tokenomics
                    and the metaverse itself. Ultimately Unbounded.Earth aims to
                    build a highly collaborative virtual multiverse that
                    empowers the creative potential of its users.
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

export default LitePaperPage;
