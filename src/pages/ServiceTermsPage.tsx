import tw, { styled } from "twin.macro";
import decorationLeft from "../assets/images/decoration-left.png";
import decorationRight from "../assets/images/decoration-right.png";
import decorationTree from "../assets/images/decoration-tree.png";
import faqImg from "../assets/images/faq.png";
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

const ServiceTermsPage = () => {
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
                Terms of service
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#FFFFFF] text-center mt-[12px]">
                Here you can see the path of<br></br> our information
              </div>
            </Banner>
          </div>
          <div tw="relative xl:px-[150px] lg:px-[110px] md:px-[60px] sm:px-[30px] px-[20px] mx-auto lg:mt-[80px] md:mt-[60px] sm:mt-[50px] mt-[40px]">
            <div>
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[40px] md:text-[32px] sm:text-[28px] text-[24px] text-[#2e2a2a] uppercase">
                UNBOUNDED EARTH TERMS &#65120; CONDITIONS FOR NFTS PURCHASE AS
                PART OF THE NFT COLLECTION OFFERING
              </div>
              <div tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                These terms and conditions constitute a legally binding
                agreement (the “Agreement”) between you (also referred to herein
                as “You”, “Your” or “User”) and Unbounded Earth (“we” or “us”),
                governing your purchase of NFTs as part of the Unbounded Earth
                NFT Collection Offering (the “Offering”). BY PARTICIPATING IN
                THIS OFFERING, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF
                THE TERMS INCORPORATED HEREIN AND ALL OF THE TERMS OF SERVICE
                INCLUDED. If you do not agree to the terms of this Agreement, as
                well as the Terms of Service, you may not participate in the
                Offering.
              </div>
              <div tw="font-quattrocento md:text-lg sm:text-[16px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                By entering into this Agreement, and/or by you participating in
                the Unbounded Earth NFT Offering, you expressly acknowledge that
                you understand this Agreement and accept all of its terms. IF
                YOU DO NOT AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS
                AGREEMENT, YOU MAY NOT PARTICIPATE IN THE OFFERING.
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                1. Definitions
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] leading-[25px]">
                  <span tw="mr-[10px] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#000000]">
                    Unbounded Earth
                  </span>{" "}
                  means Unbounded Earth a.k.a. stylized “Unbounded.Earth”
                </div>
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] leading-[25px]">
                  <span tw="mr-[10px] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#000000]">
                    Cardano
                  </span>{" "}
                  means the open-source and decentralized public blockchain
                  platform, with consensus achieved using proof of stake. It can
                  facilitate peer-to-peer transactions with its internal
                  cryptocurrency, known as “ADA.”
                </div>
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] leading-[25px]">
                  <span tw="mr-[10px] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#000000]">
                    Art
                  </span>{" "}
                  means any art, graphics, images, designs, logos, taglines, and
                  drawings that may be associated with an NFT in which you
                  acquire Licensed Rights.
                </div>
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] leading-[25px]">
                  <span tw="mr-[10px] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#000000]">
                    Equivalent
                  </span>{" "}
                  means the value, in ADA, of the market value of the relevant
                  amount of cryptocurrency on the day of the transaction.{" "}
                </div>
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] leading-[25px]">
                  <span tw="mr-[10px] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#000000]">
                    Name and Likeness
                  </span>{" "}
                  means name, nicknames, images, likenesses, marks, copyrights,
                  trade dress colors, trade dress designs, and/or all other
                  intellectual property of Unbounded Earth.{" "}
                </div>
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] leading-[25px]">
                  <span tw="mr-[10px] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#000000]">
                    NFT
                  </span>{" "}
                  means any blockchain-tracked, non-fungible token.{" "}
                </div>
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] leading-[25px]">
                  <span tw="mr-[10px] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#000000]">
                    Licensed Rights
                  </span>{" "}
                  with respect to an NFT means your rights to a Licensed NFT of
                  which you are the current rightful licensee and which you
                  acquired from a legitimate source, where proof of such
                  purchase is recorded on the relevant blockchain.
                </div>
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] leading-[25px]">
                  <span tw="mr-[10px] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#000000]">
                    Licensed NFT
                  </span>{" "}
                  means an NFT from Unbounded Earth.
                </div>
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] leading-[25px]">
                  <span tw="mr-[10px] lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#000000]">
                    Third Party IP
                  </span>{" "}
                  means any third-party patent rights (including, without
                  limitation, patent applications and disclosures), copyrights,
                  trade secrets, trademarks, know-how or any other intellectual
                  property rights recognized in any country or jurisdiction in
                  the world.
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                2. Ownership
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:mt-[20px] md:mt-[18px] sm:mt-[15px] mt-[12px] lg:leading-[32px] md:leading-[30px] sm:leading-[27px] leading-[23px]">
                  You acknowledge and agree that Unbounded Earth (or, as
                  applicable, its licensors) owns all legal right, title and
                  interest in and to the Art and Name and Likeness, and all
                  intellectual property rights therein. The rights that You have
                  in and to the Licensed NFT and Art are limited to those
                  expressly stated in Section 3 of this Agreement. Unbounded
                  Earth and its licensors reserve all rights and ownership in
                  and to the Licensed NFT, Name and Likeness, and Art not
                  expressly granted to You in Section 3 of this Agreement. All
                  purchases of Licensed NFTs, as well as associated charges, are
                  non-refundable. This no-refund policy shall apply at all times
                  regardless of Your decision to terminate usage of the Licensed
                  NFT, any disruption to the operations of any components of the
                  Licensed NFT, or any other reason whatsoever.
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                3. Rights
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#2e2a2a]">
                  (a) Your Licensed Rights
                </div>
                <div>
                  <div tw="flex mt-1">
                    <div tw="lg:mt-[10px] sm:mt-[7px] mt-[5px] w-[8px] h-[8px]">
                      <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                    </div>
                    <div tw="ml-2 font-quattrocento font-normal text-[#475556]">
                      You acknowledge and agree that the Licensed NFTs are made
                      available solely for entertainment purposes.
                    </div>
                  </div>
                  <div tw="flex mt-1">
                    <div tw="lg:mt-[10px] sm:mt-[7px] mt-[5px] w-[8px] h-[8px]">
                      <img tw="mr-2" alt="RectangleBlue" src={RectangleBlue} />
                    </div>
                    <div tw="ml-2 font-quattrocento font-normal text-[#475556]">
                      Without limiting the foregoing and subject to your
                      continued compliance with this Agreement (and Terms of
                      Service), Unbounded Earth grants you a worldwide,
                      non-exclusive, non-transferable (except as specifically
                      provided below in section 3 (b), license to display the
                      Art for your Licensed NFTs, solely for your own personal,
                      non-commercial use.
                    </div>
                  </div>
                </div>
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] text-[#0e1a1a]">
                  (b) Permissible Transfers of Your Licensed NFT
                </div>
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  You have the limited right to transfer the Licensed NFT,
                  provided that
                </div>
                <div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (i) the transferee accepts all of the terms of this
                    Agreement and all of the terms of the Terms of Service;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (ii) Unbounded Earth is paid six percent (6%) of the gross
                    amounts paid by such party relating to the Licensed NFT,
                    including but not limited to any transfer price and any
                    other related compensation (e.g., (1) if the transfer price
                    is the Equivalent of 1,000 ADA then The Media Rights
                    Manager, a.k.a. MRM, will be entitled to the Equivalent of
                    60 ADA or (2) if the transfer price is Equivalent to 1,000
                    ADA and an additional 500 ADA is paid as related use fee
                    then MRM would be entitled to 90 ADA and such payment shall
                    be paid on the same terms and at the same time as you are
                    paid;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (iii) You have not prior to the transfer breached this
                    Agreement or the Terms of Service;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (iv) prior to the transfer your license to the Licensed NFT
                    has not been terminated;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (v) the party purchasing the Licensed NFT provides Unbounded
                    Earth with a valid Cardano wallet address. You acknowledge
                    and agree that the foregoing amounts payable to Unbounded
                    Earth under Section 3(b)(ii) hereof do not include, and are
                    not intended to cover, any additional fees imposed or
                    required by the platform through which You are transferring
                    the Licensed NFT.
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                4. Restrictions
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  You agree that you may not, nor permit any third party to do
                  or attempt to do any of the following without express prior
                  written consent from Unbounded Earth in each case:
                </div>
                <div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (i) modify the Licensed NFT, Name and Likeness and/or Art
                    for your Licensed NFT in any way, including, without
                    limitation, the shapes, designs, drawings, attributes, or
                    color schemes;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (ii) use the Licensed NFT, Name and Likeness and/or Art for
                    your Licensed NFTs to advertise, market, or sell any product
                    or service;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (iii) use the Licensed NFT, Name and Likeness and/or Art
                    from your Licensed NFTs in connection with images, videos,
                    or other forms of media that depict hatred, intolerance,
                    violence, cruelty, or anything else that could reasonably be
                    found to constitute hate speech or otherwise infringe upon
                    the rights of others, drugs (including, without limitation,
                    both prescription and non-prescription) or other
                    supplements, death, pornography or other “adult only” or
                    sexually explicit activities, prostitution or any dating or
                    escort activities, weapons or ammunition, denigration or
                    discrimination against individuals based on race, national
                    origin, gender, religion, disability, ethnicity, sexual
                    orientation, gender identity or age, medical conditions
                    and/or political campaigns or causes;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (iv) use the Licensed NFT, Name and Likeness and/or Art from
                    Your Licensed NFTs in movies, videos, or any other forms of
                    media, except solely for Your own personal, non-commercial
                    use;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (v) sell, distribute for commercial gain (including, without
                    limitation, giving away in the hopes of eventual commercial
                    gain), or otherwise commercialize merchandise that includes,
                    contains, or consists of the Licensed NFT, Name and Likeness
                    and/or Art from Your Licensed NFTs;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (vi) attempt to trademark, copyright, or otherwise acquire
                    additional intellectual property rights in or to the
                    Licensed NFT, Name and Likeness and/or Art from Your
                    Licensed NFTs;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (vii) otherwise utilize the Art from your Licensed NFTs for
                    Your or any third party’s commercial benefit.
                  </div>
                </div>
                <div tw="mt-[10px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  To the extent that the Licensed NFT, Name and Likeness and/or
                  Art associated with Your Licensed NFTs contains Third Party IP
                  You understand and agree as follows:
                </div>
                <div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (i) that You will not have the right to use such Third Party
                    IP in any way except as incorporated in the Art, and subject
                    to the license and restrictions contained herein;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (ii) that, depending on the nature of the license granted
                    from the owner of the Third Party IP, Unbounded Earth may
                    need to pass through additional terms and/or restrictions on
                    Your ability to use the Art; and
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (iii) to the extent that Unbounded Earth informs You of such
                    additional restrictions in writing (email is permissible),
                    You will be responsible for complying with all such
                    restrictions from the date that You receive the notice, and
                    that failure to do so will be deemed a breach of this
                    Agreement.
                  </div>
                </div>
                <div tw="mt-[10px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  The restrictions in this Section 4 will survive the expiration
                  or termination of this Agreement.
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                5. Termination of the License
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  The Licensed Rights granted to You hereunder shall
                  automatically terminate and all rights shall return to
                  Unbounded Earth if:
                </div>
                <div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (i) at any time You sell, trade, donate, give away,
                    transfer, or otherwise dispose of Your Licensed NFT for any
                    reason except as specially provided in section 3 of this
                    Agreement;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (ii) You breach any of the Agreement and conditions and/or
                    terms of service;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (iii) You have a trustee, receiver or similar party
                    appointed for Your property, become insolvent, acknowledge
                    Your insolvency in any manner, make an assignment for the
                    benefit of your creditors, or file a petition of bankruptcy;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (iv) You engage in any unlawful business practice related to
                    the Licensed NFT;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (v) You initiate any legal actions, except an arbitration as
                    specifically provided herein, against any of Unbounded Earth
                    and/or its officers, directors, affiliates, agents,
                    attorneys and employees.
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                6. DISCLAIMER OF WARRANTIES &#65120; LIMITATION OF LIABILITY.
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[17px] md:text-[15px] sm:text-[14px] text-[12px] text-[#475556]">
                  ALL LICENSED NFTs ARE PROVIDED “AS IS” AND “AS AVAILABLE”
                  WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED.{" "}
                  <br></br>TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO
                  APPLICABLE LAW, UNBOUNDED EARTH DISCLAIMS ALL WARRANTIES,
                  EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
                  WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS
                  FOR A PARTICULAR PURPOSE. <br></br>TO THE FULLEST EXTENT
                  PERMISSIBLE BY APPLICABLE LAW, IN NO EVENT SHALL UNBOUNDED
                  EARTH BE LIABLE TO YOU FOR ANY PERSONAL INJURY, PROPERTY
                  DAMAGE, LOST PROFITS, COST OF SUBSTITUTE GOODS OR SERVICES,
                  LOSS OF DATA, LOSS OF GOODWILL, WORK STOPPAGE, COMPUTER AND/OR
                  DEVICE OR TECHNOLOGY FAILURE OR MALFUNCTION, OR FOR ANY FORM
                  OF DIRECT OR INDIRECT DAMAGES, AND/OR ANY SPECIAL, INCIDENTAL,
                  CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES BASED ON ANY
                  CAUSES OF ACTION WHATSOEVER RELATED TO ANY NFT, INCLUDING BUT
                  NOT LIMITED TO THE LICENSED NFT, THE AUCTION, ANY TECHNOLOGY
                  AND/OR PARTIES RELATED TO THE AUCTION, INCLUDING BUT NOT
                  LIMITED TO BLOCKCHAIN. <br></br>YOU AGREE THAT THIS LIMITATION
                  OF LIABILITY APPLIES WHETHER SUCH ALLEGATIONS ARE FOR BREACH
                  OF CONTRACT, TORTIOUS BEHAVIOR, NEGLIGENCE, OR FALL UNDER ANY
                  OTHER CAUSE OF ACTION, REGARDLESS OF THE BASIS UPON WHICH
                  LIABILITY IS CLAIMED AND EVEN IF A DISCLAIMING PARTY HAS BEEN
                  ADVISED OF THE POSSIBILITY OF SUCH LOSS OR DAMAGE, AND IN ANY
                  EVENT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
                  UNBOUNDED EARTH’S TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED
                  TEN PERCENT (10%) OF THE TOTAL SUM PAID DIRECTLY BY YOU TO
                  UNBOUNDED EARTH FOR THE APPLICABLE LICENSED NFT.<br></br> YOU
                  ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION
                  AND DEALING ONLINE OVER THE INTERNET AND AGREE THAT WE HAVE NO
                  LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS
                  IT IS DUE TO OUR GROSS NEGLIGENCE.<br></br> IF APPLICABLE LAW
                  DOES NOT ALLOW ALL OR ANY PART OF THE ABOVE LIMITATION OF
                  LIABILITY TO APPLY TO YOU, THE LIMITATIONS WILL APPLY TO YOU
                  ONLY TO THE EXTENT PERMITTED BY APPLICABLE LAW.
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                7. Assumption of Risk
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  As noted above, the Licensed NFTs are made available solely
                  for entertainment purposes. You agree that You assume the
                  following risks:
                </div>
                <div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (A) To the extent there is a price or market for a
                    blockchain asset such as an NFT, such markets and prices are
                    extremely volatile, and variations in the price of other
                    digital assets could materially and adversely affect the
                    value of any digital asset(s) You own, including Your
                    Licensed NFT, and there is no guarantee that Your Licensed
                    NFTs will have or retain any value;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (B) the commercial or market value on a Licensed NFT that
                    You purchase may materially diminish in value as a result of
                    a variety of things such as negative publicity ;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (C) there are risks associated with using an Internet-native
                    assets (e.g., non-fungible tokens, cryptocurrencies, etc.)
                    including, but not limited to, the risk of hardware,
                    software and Internet connections and/or failures, the risk
                    of malicious software introduction, and the risk that third
                    parties may obtain unauthorized access to information stored
                    within your digital “wallet” or elsewhere, and Unbounded
                    Earth will not be responsible for any of these, however
                    caused;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (D) Unbounded Earths does not make any promises or
                    guarantees about the availability of the Licensed NFT or the
                    Art on the Internet or that they will host the Licensed NFT
                    or the Art at any specific location and/or for any specific
                    period of time;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (E) upgrades to the Cardano platform, a hard fork or other
                    change in the Cardano platform, a failure or cessation of
                    Cardano, or a change in how transactions are confirmed on
                    the Cardano platform may have unintended, adverse effects on
                    all Blockchains using such technologies, including without
                    limitation Licensed NFTs;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (F) Unbounded Earth does not make any promises or guarantees
                    related to Blockchain or any other third parties related to
                    this auction and each of their applications and/or services,
                    including but not limited to the continued availability of
                    either and/or the protection and/or storage of any data you
                    provide to those parties;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (G) the risk of losing access to Licensed NFT due to loss of
                    private key(s), custodial error or purchaser error;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (H) the risk of mining attacks;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (I) the risk of hacking, security weaknesses, fraud,
                    counterfeiting, cyber-attacks and other technological
                    difficulties
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (J) the risk of changes to the regulatory regime governing
                    blockchain technologies, cryptocurrencies, and tokens and
                    new regulations, unfavorable regulatory intervention in one
                    or more jurisdictions or policies any of which may
                    materially adversely affect the use and value of the
                    Licensed NFT;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (K) the risks related to taxation; (L) that NFTs are not
                    legal tender and are not back by any government; and
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (M) Unbounded Earth is not responsible for any transaction
                    between you and a third party (e.g., Your transfer of a
                    Licensed NFT from a third party on the so-called “secondary
                    market”), and Unbounded Earth shall have no liability in
                    connection with any such transaction.
                  </div>
                </div>
                <div tw="mt-[10px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  In addition to assuming all of the above risks, you
                  acknowledge that You have obtained sufficient information to
                  make an informed decision to license the Licensed NFT and that
                  You understand and agree that you are solely responsible for
                  determining the nature, potential value, suitability and
                  appropriateness of these risks for yourself. <br></br>
                  Unbounded Earth cannot and does not represent or warrant that
                  any Licensed NFT, or its supporting systems or technology, is
                  reliable, current or error-free, meets Your requirements, or
                  that defects in the Licensed NFT, or its supporting systems or
                  technology, will be corrected. Unbounded Earth cannot and does
                  not represent or warrant that the Licensed NFT or the delivery
                  mechanism for it are free of viruses or other harmful
                  components. <br></br>You accept and acknowledge that Unbounded
                  Earth will not be responsible for any communication failures,
                  disruptions, errors, distortions or delays You may experience
                  related to the Auction.
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                8. Governing Law
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  This Agreement and all matters related to it and/or any
                  Licensed NFT shall be governed by, construed, and enforced in
                  accordance with the laws of the local Commonwealth, as they
                  are applied to agreements entered into and to be performed
                  entirely within locality and without regard to conflict of law
                  principles, except to the extent that law is inconsistent with
                  or preempted by federal law. Any and all entities uncertain of
                  related and all local governing laws are explicitly not
                  encouraged to participate in NFT purchases
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                9. Changes to this Agreement
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  Unbounded Earth may make changes to this Agreement from time
                  to time. <br></br>When Unbounded Earth makes such changes, we
                  will make the updated Agreement available on this website and
                  update the “Last Updated” date at the beginning of the
                  Agreement accordingly, as needed. Please check this page
                  periodically for changes. <br></br>Any changes to this
                  Agreement will apply on the date that they are made and, by
                  way of example, Your continued access to or use of the
                  Licensed NFT and the Art after the Agreement has been updated
                  will constitute your binding acceptance of the updates.
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                10. Eligibility
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  (a) Participation in the Unbounded Earth NFT Collection
                  Offering is open only to individuals who have the right and
                  authority to enter into this Agreement, are fully able and
                  competent to satisfy the terms, conditions, and obligations
                  herein and who are using currency that such party is the
                  lawful holder thereof. It is not available to Users who have
                  had their User privileges temporarily or permanently
                  deactivated. You may not allow other persons to use your User
                  credentials, and You agree that You are the sole authorized
                  user.
                </div>
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  (b) By becoming a User, you represent and warrant that you are
                  at least over 18 years old to include the legal age of consent
                  as defined by applicable local territorial laws and
                  regulations.
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                11. Indemnity
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  You will defend, indemnify, and hold Unbounded Earth,
                  including each of their respective affiliates, subsidiaries,
                  parents, successors and assigns, and each of our respective
                  officers, directors, employees, agents, or shareholders,
                  harmless from any claims, actions, suits, losses, costs,
                  liabilities and expenses (including reasonable attorneys’
                  fees) relating to or arising out of your license, sale or
                  possession of the Licensed NFT and/or Your participation in
                  the Offering, including:
                </div>
                <div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (1) Your breach of this Agreement or the documents it
                    incorporates by reference;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (2) Your violation of any law or the rights of a third party
                    as a result of your own interaction with such third party;
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (3) any allegation that any materials that You submit to us
                    or transmit in the course of the auction, communications
                    seeking Unbounded Earth’s consent to activities or
                    otherwise, infringe or otherwise violate the copyright,
                    trademark, trade secret or other intellectual property or
                    other rights of any third party; and/or
                  </div>
                  <div tw="mt-1 font-quattrocento font-normal text-[#475556]">
                    (4) any other activities in connection with the Offering or
                    the Licensed NFT. This indemnity shall be applicable without
                    regard to the negligence of any party, including any
                    indemnified person.
                  </div>
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[27px] md:text-[24px] sm:text-[22px] text-[20px] text-[#2e2a2a]">
                12. If you are provided a translation of this Agreement, the
                original version in English will be used in deciding any issues
                or disputes which arise under this Agreement.
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                13. Severability
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  If any term or provision of this Agreement is invalid,
                  illegal, or unenforceable in any jurisdiction, such
                  invalidity, illegality, or unenforceability shall not affect
                  any other term or provision of this Agreement or invalidate or
                  render unenforceable such term or provision in any other
                  jurisdiction.
                </div>
              </div>
            </div>
            <div tw="lg:mt-[50px] md:mt-[30px] sm:mt-[20px] mt-[15px]">
              <div tw="col-span-2 font-unbounded_earth font-normal lg:text-[32px] md:text-[28px] sm:text-[24px] text-[20px] text-[#2e2a2a] uppercase">
                14. Contact Us
              </div>
              <div tw="font-quattrocento lg:text-lg md:text-[16px] sm:text-[15px] text-[14px] text-[#3c3737] mt-[1.5vw] mb-[1.5vw] font-bold">
                <div tw="lg:text-[19px] md:text-[17px] sm:text-[16px] text-[15px] text-[#475556]">
                  If you have any questions or concerns, including if you need
                  to access this Agreement in an alternative format, we
                  encourage you to contact us via e-mail at
                  Team@Unbounded.Earth.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledPage>
  );
};

export default ServiceTermsPage;
